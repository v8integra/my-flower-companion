import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppIcon } from "@/components/AppIcon";
import Modal from "@/components/Modal";
import PlantChip from "@/components/PlantChip";
import ZoneBadge from "@/components/ZoneBadge";
import { useGarden } from "@/context/GardenContext";
import { useLanguage } from "@/context/LanguageContext";
import { getConflictsInGarden, PLANTS } from "@/data/plants";
import "@/components/ConflictBadge.css";
import "./GardenDetailPage.css";

export default function GardenDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { gardens, updateGarden, removePlantFromGarden, resetGarden, customPlants } = useGarden();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [resetModalVisible, setResetModalVisible] = useState(false);

  const garden = gardens.find(g => g.id === id);
  if (!garden) {
    return (
      <div className="detail-center">
        <p className="detail-not-found">{t("garden_not_found")}</p>
        <button className="btn-secondary" onClick={() => navigate("/")}>{t("go_back")}</button>
      </div>
    );
  }

  const allPlants = [...customPlants, ...PLANTS];
  const plants = garden.plantIds.map(pid => allPlants.find(p => p.id === pid)).filter(Boolean) as typeof PLANTS;
  const conflicts = getConflictsInGarden(garden.plantIds);

  const confirmReset = () => {
    resetGarden(garden.id);
    setResetModalVisible(false);
  };

  const saveName = () => {
    if (nameInput.trim()) {
      updateGarden(garden.id, { name: nameInput.trim() });
    }
    setEditingName(false);
  };

  return (
    <div className="garden-detail-page">
      <div className="detail-header">
        <button className="icon-btn-plain" onClick={() => navigate("/")}>
          <AppIcon name="chevron-back" size={24} color="var(--text)" />
        </button>
        <div className="detail-header-center">
          {editingName ? (
            <input
              className="detail-name-input"
              aria-label={t("garden_name_placeholder")}
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && saveName()}
              onBlur={saveName}
              autoFocus
              maxLength={40}
            />
          ) : (
            <button className="detail-name-btn" onClick={() => { setNameInput(garden.name); setEditingName(true); }}>
              <span className="detail-garden-name">{garden.name}</span>
              <AppIcon name="pencil" size={14} color="var(--text-secondary)" />
            </button>
          )}
        </div>
        <button
          className="icon-btn-plain"
          onClick={() => setResetModalVisible(true)}
          disabled={plants.length === 0}
        >
          <AppIcon name="refresh" size={18} color={plants.length === 0 ? "var(--border)" : "var(--danger)"} />
        </button>
      </div>

      <div className="detail-content">
        <div className="zone-row">
          <ZoneBadge zone={garden.zone} onClick={() => navigate("/settings")} />
          {garden.zone !== null && (
            <button className="override-btn" onClick={() => navigate("/settings")}>{t("change_zone")}</button>
          )}
        </div>

        <div className="toggle-card">
          <label className="toggle-row">
            <span className="toggle-info">
              <AppIcon name="leaf-outline" size={16} color="var(--primary)" />
              {t("include_herbs")}
            </span>
            <input
              type="checkbox"
              className="toggle-switch"
              checked={garden.includeHerbs}
              onChange={e => updateGarden(garden.id, { includeHerbs: e.target.checked })}
            />
          </label>
          <div className="toggle-divider" />
          <label className="toggle-row">
            <span className="toggle-info">
              <AppIcon name="nutrition-outline" size={16} color="var(--accent)" />
              {t("include_vegetables")}
            </span>
            <input
              type="checkbox"
              className="toggle-switch"
              checked={garden.includeVegetables}
              onChange={e => updateGarden(garden.id, { includeVegetables: e.target.checked })}
            />
          </label>
        </div>

        {conflicts.length > 0 && (
          <div className="conflict-banner">
            <AppIcon name="alert-circle" size={18} color="var(--warning)" />
            <div>
              <div className="conflict-banner-title">
                {conflicts.length === 1 ? "These plants may not thrive together" : "Some plants in this garden may not thrive together"}
              </div>
              {conflicts.map((c, i) => (
                <p className="conflict-banner-note" key={i}>
                  <strong>{c.plantA.name} + {c.plantB.name}:</strong> {c.reason}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="section-header">
          <h3>{t("my_plants")}</h3>
          <button className="add-plant-btn" onClick={() => navigate(`/garden/${garden.id}/add-plant`)}>
            <AppIcon name="add" size={16} color="var(--primary)" />
            {t("add_plant")}
          </button>
        </div>

        {plants.length === 0 ? (
          <button className="empty-plants" onClick={() => navigate(`/garden/${garden.id}/add-plant`)}>
            <AppIcon name="add-circle-outline" size={32} color="var(--border)" />
            <span className="empty-plants-title">{t("add_first_plant")}</span>
            <span className="empty-plants-sub">{t("add_first_plant_sub")}</span>
          </button>
        ) : (
          <div className="chip-grid">
            {plants.map(p => (
              <PlantChip key={p.id} plant={p} onRemove={() => removePlantFromGarden(garden.id, p.id)} />
            ))}
          </div>
        )}

        {plants.length > 0 && (
          <button className="view-companions-btn" onClick={() => navigate(`/garden/${garden.id}/companions`)}>
            <AppIcon name="flower" size={20} color="#fff" />
            {t("view_companions")}
          </button>
        )}
      </div>

      {resetModalVisible && (
        <Modal onClose={() => setResetModalVisible(false)} ariaLabel={t("reset_garden")} panelClassName="modal-card">
          <div className="modal-icon-row">
            <AppIcon name="refresh-circle" size={32} color="var(--danger)" />
          </div>
          <h3 className="modal-title">{t("reset_garden")}</h3>
          <p className="modal-message">{t("reset_garden_confirm", { name: garden.name })}</p>
          <div className="modal-actions">
            <button className="btn-secondary flex-1" onClick={() => setResetModalVisible(false)}>{t("cancel")}</button>
            <button className="btn-danger flex-1" onClick={confirmReset}>{t("reset")}</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
