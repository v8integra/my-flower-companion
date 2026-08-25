import { useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppIcon } from "@/components/AppIcon";
import { useGarden } from "@/context/GardenContext";
import { useLanguage } from "@/context/LanguageContext";
import { PLANTS, Plant } from "@/data/plants";
import { getPlantName } from "@/translations/plant-names";
import ToxicityBadge from "@/components/ToxicityBadge";
import "./AddPlantPage.css";

export default function AddPlantPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { gardens, addPlantToGarden, removePlantFromGarden, customPlants, addCustomPlant, removeCustomPlant } = useGarden();
  const { t, lang } = useLanguage();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | Plant["type"]>("all");
  const [modalVisible, setModalVisible] = useState(false);
  const [customName, setCustomName] = useState("");
  const [customType, setCustomType] = useState<Plant["type"]>("flower");
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [deleteTarget, setDeleteTarget] = useState<Plant | null>(null);

  const garden = gardens.find(g => g.id === id);
  const existingIds = new Set(garden?.plantIds ?? []);

  const allPlants = useMemo(() => [...customPlants, ...PLANTS], [customPlants]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return allPlants
      .filter(p => {
        if (filter !== "all" && p.type !== filter) return false;
        if (q && !p.name.toLowerCase().includes(q) && !getPlantName(p, lang).toLowerCase().includes(q)) return false;
        return true;
      })
      .sort((a, b) => getPlantName(a, lang).localeCompare(getPlantName(b, lang)));
  }, [search, filter, allPlants, lang]);

  const handleToggle = (plant: Plant) => {
    if (!id) return;
    if (existingIds.has(plant.id)) {
      removePlantFromGarden(id, plant.id);
    } else {
      addPlantToGarden(id, plant.id);
    }
  };

  const openModal = () => {
    setCustomName(search);
    setCustomType("flower");
    setModalVisible(true);
    setTimeout(() => nameInputRef.current?.focus(), 100);
  };

  const handleCreateCustom = () => {
    const trimmed = customName.trim();
    if (!trimmed || !id) return;
    const plant = addCustomPlant(trimmed, customType);
    addPlantToGarden(id, plant.id);
    setModalVisible(false);
    setCustomName("");
    setSearch("");
  };

  const filterLabels: Record<string, string> = {
    all: t("filter_all"),
    flower: t("filter_flowers"),
    herb: t("filter_herbs"),
    vegetable: t("filter_vegetables"),
  };

  const typeLabel: Record<Plant["type"], string> = {
    flower: t("type_flower"),
    herb: t("type_herb"),
    vegetable: t("type_vegetable"),
  };

  return (
    <div className="add-plant-page">
      <div className="add-plant-header">
        <button className="icon-btn-plain" onClick={() => navigate(-1)}>
          <AppIcon name="chevron-back" size={24} color="var(--text)" />
        </button>
        <h1>{t("add_plants")}</h1>
        <div style={{ width: 36 }} />
      </div>

      <div className="search-row">
        <AppIcon name="search" size={18} color="var(--text-secondary)" />
        <input
          className="search-input"
          placeholder={t("search_plants")}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search.length > 0 && (
          <button className="clear-search-btn" onClick={() => setSearch("")}>
            <AppIcon name="close-circle" size={18} color="var(--text-secondary)" />
          </button>
        )}
      </div>

      <button className="add-custom-row" onClick={openModal}>
        <span className="add-custom-icon">
          <AppIcon name="add" size={16} color="var(--primary)" />
        </span>
        <span className="add-custom-label">{t("add_custom_banner")}</span>
        <AppIcon name="chevron-forward" size={14} color="var(--text-secondary)" />
      </button>

      <div className="filter-row">
        {(["all", "flower", "herb", "vegetable"] as const).map(f => (
          <button
            key={f}
            className={"filter-btn" + (filter === f ? " filter-btn-active" : "")}
            onClick={() => setFilter(f)}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>

      <div className="plant-list">
        {filtered.length === 0 ? (
          <div className="add-plant-empty">
            <AppIcon name="search-outline" size={36} color="var(--border)" />
            <p>{t("no_plants_found")}</p>
            <button className="empty-create-btn" onClick={openModal}>
              <AppIcon name="add-circle-outline" size={16} color="var(--primary)" />
              {t("create_named", { name: search || t("add_custom_plant") })}
            </button>
          </div>
        ) : (
          filtered.map(item => {
            const added = existingIds.has(item.id);
            const isCustom = item.id.startsWith("custom_");
            return (
              <div className={"plant-row" + (added ? " plant-row-added" : "")} key={item.id}>
                <div className={`plant-row-icon plant-row-icon-${item.type}`}>
                  <AppIcon name={item.icon} size={20} color="currentColor" />
                </div>
                <div className="plant-row-info">
                  <div className="plant-row-name-line">
                    <span className="plant-row-name">{getPlantName(item, lang)}</span>
                    {item.toxicity && <ToxicityBadge plant={item} />}
                    {isCustom && <span className="custom-badge">{t("custom_badge")}</span>}
                  </div>
                  <span className={`plant-row-type plant-row-type-${item.type}`}>{typeLabel[item.type]}</span>
                </div>
                {isCustom && (
                  <button className="delete-plant-btn" onClick={() => setDeleteTarget(item)}>
                    <AppIcon name="trash-outline" size={17} color="var(--danger)" />
                  </button>
                )}
                <button
                  className={"toggle-add-btn" + (added ? " toggle-add-btn-added" : "")}
                  onClick={() => handleToggle(item)}
                >
                  <AppIcon name={added ? "remove" : "add"} size={18} color={added ? "var(--danger)" : "#fff"} />
                </button>
              </div>
            );
          })
        )}
      </div>

      {deleteTarget && (
        <div className="modal-overlay" onClick={() => setDeleteTarget(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="delete-modal-icon">
              <AppIcon name="trash" size={28} color="var(--danger)" />
            </div>
            <h3 className="modal-title">{t("delete_custom_plant")}</h3>
            <p className="modal-message">{t("delete_custom_body", { name: deleteTarget.name })}</p>
            <div className="modal-actions">
              <button className="btn-secondary flex-1" onClick={() => setDeleteTarget(null)}>{t("cancel")}</button>
              <button
                className="btn-danger flex-1"
                onClick={() => { removeCustomPlant(deleteTarget.id); setDeleteTarget(null); }}
              >
                <AppIcon name="trash-outline" size={16} color="#fff" /> {t("delete")}
              </button>
            </div>
          </div>
        </div>
      )}

      {modalVisible && (
        <div className="modal-overlay modal-overlay-bottom" onClick={() => setModalVisible(false)}>
          <div className="sheet-card" onClick={e => e.stopPropagation()}>
            <div className="sheet-header">
              <h3>{t("add_custom_plant")}</h3>
              <button className="icon-btn" onClick={() => setModalVisible(false)}>
                <AppIcon name="close" size={20} color="var(--text-secondary)" />
              </button>
            </div>

            <label className="sheet-label">{t("plant_name")}</label>
            <div className="sheet-input-row">
              <input
                ref={nameInputRef}
                className="sheet-input"
                placeholder={t("plant_name_placeholder")}
                value={customName}
                onChange={e => setCustomName(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleCreateCustom()}
                maxLength={50}
              />
            </div>

            <label className="sheet-label" style={{ marginTop: 16 }}>{t("type_label")}</label>
            <div className="type-pills">
              {(["flower", "herb", "vegetable"] as const).map(tp => (
                <button
                  key={tp}
                  className={`type-pill type-pill-${tp}` + (customType === tp ? " type-pill-active" : "")}
                  onClick={() => setCustomType(tp)}
                >
                  <AppIcon name={tp === "flower" ? "flower" : tp === "herb" ? "leaf" : "nutrition"} size={14} color="currentColor" />
                  {typeLabel[tp]}
                </button>
              ))}
            </div>

            <p className="sheet-hint">{t("custom_plant_hint")}</p>

            <button className="btn-primary sheet-save-btn" onClick={handleCreateCustom} disabled={!customName.trim()}>
              <AppIcon name="add-circle" size={18} color="#fff" />
              {t("add_to_garden")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
