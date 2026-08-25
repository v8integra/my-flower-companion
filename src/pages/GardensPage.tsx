import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppIcon } from "@/components/AppIcon";
import PlantChip from "@/components/PlantChip";
import ZoneBadge from "@/components/ZoneBadge";
import { useGarden } from "@/context/GardenContext";
import { useLanguage } from "@/context/LanguageContext";
import { PLANTS } from "@/data/plants";
import { LANGUAGES } from "@/translations";
import "./GardensPage.css";

export default function GardensPage() {
  const { gardens, createGarden, deleteGarden } = useGarden();
  const { t, lang, setLang } = useLanguage();
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; name: string } | null>(null);
  const [langPickerVisible, setLangPickerVisible] = useState(false);

  const handleCreate = () => {
    const garden = createGarden(newName.trim() || undefined);
    setCreating(false);
    setNewName("");
    navigate(`/garden/${garden.id}`);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    deleteGarden(deleteTarget.id);
    setDeleteTarget(null);
  };

  return (
    <div className="gardens-page">
      <div className="gardens-header">
        <div>
          <h1 className="gardens-app-name">My Flower Companion</h1>
          <p className="gardens-subtitle">{t("app_subtitle")}</p>
        </div>
        <div className="gardens-header-right">
          <button className="lang-btn" onClick={() => setLangPickerVisible(true)} aria-label={t("select_language")}>
            <AppIcon name="globe-outline" size={20} color="var(--primary)" />
          </button>
          <button className="add-btn" onClick={() => setCreating(true)} aria-label={t("create_garden")}>
            <AppIcon name="add" size={22} color="#fff" />
          </button>
        </div>
      </div>

      {creating && (
        <div className="create-card">
          <input
            className="text-input"
            placeholder={t("garden_name_placeholder")}
            value={newName}
            onChange={e => setNewName(e.target.value)}
            autoFocus
            onKeyDown={e => e.key === "Enter" && handleCreate()}
          />
          <div className="create-actions">
            <button className="btn-secondary" onClick={() => { setCreating(false); setNewName(""); }}>
              {t("cancel")}
            </button>
            <button className="btn-primary" onClick={handleCreate}>{t("create")}</button>
          </div>
        </div>
      )}

      {gardens.length === 0 ? (
        <div className="empty-state">
          <AppIcon name="leaf-outline" size={48} color="var(--border)" />
          <h3>{t("no_gardens")}</h3>
          <p>{t("no_gardens_desc")}</p>
          <button className="btn-primary btn-pill" onClick={() => setCreating(true)}>
            {t("create_garden")}
          </button>
        </div>
      ) : (
        <div className="gardens-list">
          {gardens.map(item => {
            const plants = item.plantIds.map(id => PLANTS.find(p => p.id === id)).filter(Boolean) as typeof PLANTS;
            const plantLabel = plants.length === 1
              ? `1 ${t("plant_singular")}`
              : `${plants.length} ${t("plant_plural")}`;
            return (
              <div className="garden-card-wrapper" key={item.id}>
                <button className="garden-card" onClick={() => navigate(`/garden/${item.id}`)}>
                  <div className="garden-card-top">
                    <div className="garden-card-icon-bg">
                      <AppIcon name="flower" size={22} color="var(--primary)" />
                    </div>
                    <div className="garden-card-info">
                      <div className="garden-card-name">{item.name}</div>
                      <div className="garden-card-count">{plantLabel}</div>
                    </div>
                    <div className="garden-card-right-spacer" />
                  </div>
                  {plants.length > 0 && (
                    <div className="garden-card-chips">
                      {plants.slice(0, 4).map(p => <PlantChip key={p.id} plant={p} compact />)}
                      {plants.length > 4 && <span className="garden-card-more">+{plants.length - 4} {t("more")}</span>}
                    </div>
                  )}
                  <div className="garden-card-footer">
                    <span>{t("view_garden")}</span>
                    <AppIcon name="chevron-forward" size={14} color="var(--primary)" />
                  </div>
                </button>

                <div className="garden-card-right-col">
                  <ZoneBadge zone={item.zone} />
                  <button
                    className="trash-btn"
                    onClick={() => setDeleteTarget({ id: item.id, name: item.name })}
                    aria-label={t("delete_garden")}
                  >
                    <AppIcon name="trash-outline" size={16} color="var(--danger)" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {deleteTarget && (
        <div className="modal-overlay" onClick={() => setDeleteTarget(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <h3 className="modal-title">{t("delete_garden")}</h3>
            <p className="modal-message">
              {t("delete_garden_confirm", { name: deleteTarget.name })}
            </p>
            <div className="modal-actions">
              <button className="btn-secondary flex-1" onClick={() => setDeleteTarget(null)}>{t("cancel")}</button>
              <button className="btn-danger flex-1" onClick={confirmDelete}>{t("delete")}</button>
            </div>
          </div>
        </div>
      )}

      {langPickerVisible && (
        <div className="modal-overlay" onClick={() => setLangPickerVisible(false)}>
          <div className="lang-picker-card" onClick={e => e.stopPropagation()}>
            <div className="lang-picker-header">
              <h3>{t("select_language")}</h3>
              <button className="icon-btn" onClick={() => setLangPickerVisible(false)}>
                <AppIcon name="close" size={22} color="var(--text-secondary)" />
              </button>
            </div>
            {LANGUAGES.map(l => (
              <button
                key={l.code}
                className={"lang-row" + (lang === l.code ? " lang-row-active" : "")}
                onClick={() => { setLang(l.code); setLangPickerVisible(false); }}
              >
                <span className="lang-flag">{l.flag}</span>
                <span className="lang-info">
                  <span className="lang-native">{l.nativeLabel}</span>
                  <span className="lang-english">{l.label}</span>
                </span>
                {lang === l.code && <AppIcon name="checkmark" size={18} color="var(--primary)" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
