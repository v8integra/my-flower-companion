import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppIcon } from "@/components/AppIcon";
import CompanionCard from "@/components/CompanionCard";
import ZoneBadge from "@/components/ZoneBadge";
import { useGarden } from "@/context/GardenContext";
import { useLanguage } from "@/context/LanguageContext";
import { getCompanionsForPlants, getZoneSuggestions } from "@/data/plants";
import { getPlantName } from "@/translations/plant-names";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import "./CompanionsPage.css";

export default function CompanionsPage() {
  const { id } = useParams<{ id: string }>();
  const { gardens } = useGarden();
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  const garden = gardens.find(g => g.id === id);
  useDocumentMeta(garden ? `Companion Plants for ${garden.name} | My Flower Companion` : "Garden Not Found | My Flower Companion");

  const companions = useMemo(() => {
    if (!garden) return [];
    return getCompanionsForPlants(garden.plantIds, garden.includeHerbs, garden.includeVegetables, garden.zone);
  }, [garden]);

  const zoneSuggestions = useMemo(() => {
    if (!garden || garden.zone === null) return [];
    return getZoneSuggestions(garden.zone, garden.plantIds);
  }, [garden]);

  if (!garden) {
    return (
      <div className="detail-center">
        <p className="detail-not-found">{t("garden_not_found")}</p>
        <button className="btn-secondary" onClick={() => navigate("/")}>{t("go_back")}</button>
      </div>
    );
  }

  const emptyText = garden.plantIds.length === 0
    ? t("no_companions_no_plants")
    : garden.zone !== null
    ? t("no_companions_zone")
    : t("no_companions_no_zone");

  return (
    <div className="companions-page">
      <div className="companions-header">
        <button className="icon-btn-plain" onClick={() => navigate(-1)}>
          <AppIcon name="chevron-back" size={24} color="var(--text)" />
        </button>
        <div className="companions-header-center">
          <h1>{t("companion_flowers")}</h1>
          <p>{garden.name}</p>
        </div>
        <ZoneBadge zone={garden.zone} />
      </div>

      {companions.length > 0 && (
        <div className="stats-row">
          <div className="stat">
            <div className="stat-num">{companions.length}</div>
            <div className="stat-label">{t("companions_found")}</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-num">{companions.filter(c => c.benefitType === "pest-control").length}</div>
            <div className="stat-label">{t("pest_control")}</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-num">{companions.filter(c => c.benefitType === "pollination").length}</div>
            <div className="stat-label">{t("pollination")}</div>
          </div>
        </div>
      )}

      <div className="companions-list">
        {companions.length === 0 ? (
          <div className="companions-empty">
            <AppIcon name="flower-outline" size={48} color="var(--border)" />
            <h3>{t("no_companions")}</h3>
            <p>{emptyText}</p>
            <button className="btn-primary btn-pill" onClick={() => navigate(-1)}>{t("back_to_garden")}</button>

            {zoneSuggestions.length > 0 && (
              <div className="suggest-section">
                <div className="suggest-header">
                  <AppIcon name="sunny" size={16} color="var(--primary)" />
                  <span>{t("zone_suggestions_title")}</span>
                </div>
                {zoneSuggestions.map(plant => (
                  <div className="suggest-card" key={plant.id}>
                    <div className="suggest-icon-wrap">
                      <AppIcon name={plant.icon} size={20} color="var(--primary)" />
                    </div>
                    <div className="suggest-info">
                      <div className="suggest-name">{getPlantName(plant, lang)}</div>
                      <div className="suggest-desc">{plant.description}</div>
                    </div>
                    <div className="suggest-zone-badge">
                      {plant.zones[0]}–{plant.zones[plant.zones.length - 1]}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          companions.map(item => (
            <CompanionCard key={item.plant.id} plant={item.plant} benefit={item.benefit} benefitType={item.benefitType} />
          ))
        )}
      </div>
    </div>
  );
}
