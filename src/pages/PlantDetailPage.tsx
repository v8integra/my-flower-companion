import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { AppIcon } from "@/components/AppIcon";
import CompanionCard from "@/components/CompanionCard";
import ToxicityBadge from "@/components/ToxicityBadge";
import { useLanguage } from "@/context/LanguageContext";
import { getAvoidListForPlant, getCompanionsForPlants, PLANTS, Plant } from "@/data/plants";
import { CARE_GUIDES } from "@/data/care";
import { getPlantName } from "@/translations/plant-names";
import PLANT_IMAGES from "@/data/plant-images";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import "./PlantDetailPage.css";

const SUN_ICON: Record<string, string> = {
  "Full Sun": "sunny-outline",
  "Part Shade to Full Sun": "partly-sunny",
  "Full Sun to Part Shade": "partly-sunny",
  "Part Shade to Full Shade": "cloudy",
  "Full Shade": "cloud",
};

const DIFF_CLASS: Record<string, string> = { Easy: "diff-easy", Moderate: "diff-moderate", Expert: "diff-expert" };

function formatZones(zones: number[], allZonesLabel: string, zoneRange: (min: number, max: number) => string, zoneSingle: (n: number) => string): string {
  if (!zones || zones.length === 0) return allZonesLabel;
  const sorted = [...zones].sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  if (min === max) return zoneSingle(min);
  return zoneRange(min, max);
}

function InfoCell({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="info-cell">
      <AppIcon name={icon} size={16} color="var(--primary)" />
      <span className="info-cell-label">{label}</span>
      <span className="info-cell-value">{value}</span>
    </div>
  );
}

export default function PlantDetailPage() {
  const { plantId } = useParams<{ plantId: string }>();
  const { t, lang } = useLanguage();

  const plant = PLANTS.find(p => p.id === plantId);
  const guide = plant ? CARE_GUIDES[plant.id] : undefined;
  const displayName = plant ? getPlantName(plant, lang) : "";

  const companions = useMemo(
    () => (plant ? getCompanionsForPlants([plant.id], true, true, null) : []),
    [plant]
  );
  const avoidList = useMemo(() => (plant ? getAvoidListForPlant(plant.id) : []), [plant]);

  useDocumentMeta(
    plant
      ? `${displayName} Companion Plants & Care Guide | My Flower Companion`
      : "Plant Not Found | My Flower Companion",
    plant
      ? `How to grow ${displayName}: sunlight, watering, spacing, and zones, plus ${companions.length} companion plant${companions.length === 1 ? "" : "s"} that help it thrive.`
      : undefined
  );

  if (!plant || !guide) {
    return (
      <div className="detail-center">
        <p className="detail-not-found">Plant not found.</p>
        <Link to="/care" className="btn-secondary">{t("go_back")}</Link>
      </div>
    );
  }

  const typeLabel: Record<Plant["type"], string> = {
    flower: t("type_flower"), herb: t("type_herb"), vegetable: t("type_vegetable"),
  };
  const diffLabel: Record<string, string> = {
    Easy: t("difficulty_easy"), Moderate: t("difficulty_moderate"), Expert: t("difficulty_expert"),
  };
  const sunIcon = SUN_ICON[guide.sun] ?? "partly-sunny";
  const imageUrl = PLANT_IMAGES[plant.id];
  const allZonesLabel = t("all_zones");
  const zoneRangeFn = (min: number, max: number) => t("zone_range_fmt", { min, max });
  const zoneSingleFn = (n: number) => t("zone_single_fmt", { n });

  return (
    <div className="plant-detail-page">
      <div className="detail-header">
        <Link to="/care" className="icon-btn-plain">
          <AppIcon name="chevron-back" size={24} color="var(--text)" />
        </Link>
        <div className="detail-header-center">
          <span className="detail-garden-name">{displayName}</span>
        </div>
        <div style={{ width: 36 }} />
      </div>

      <div className="plant-detail-content">
        <div className="plant-detail-top">
          <div className={`plant-detail-icon-bg plant-row-icon-${plant.type}`}>
            <AppIcon name={plant.icon} size={24} color="currentColor" />
          </div>
          <div className="plant-detail-title-col">
            <h1 className="plant-detail-title">{displayName}</h1>
            <div className={`plant-detail-type plant-row-type-${plant.type}`}>{typeLabel[plant.type]}</div>
          </div>
          <div className={`diff-badge ${DIFF_CLASS[guide.difficulty] ?? "diff-easy"}`}>
            {diffLabel[guide.difficulty] ?? guide.difficulty}
          </div>
        </div>

        <ToxicityBadge plant={plant} variant="banner" />

        {imageUrl && <img src={imageUrl} alt={displayName} className="care-plant-image" loading="lazy" />}

        <div className="zone-bar">
          <div className="zone-bar-left">
            <AppIcon name="map-outline" size={16} color="var(--primary)" />
            <div>
              <div className="zone-bar-label">{t("growing_zones")}</div>
              <div className="zone-bar-range">{formatZones(plant.zones, allZonesLabel, zoneRangeFn, zoneSingleFn)}</div>
            </div>
          </div>
          <div className="zone-dots">
            {[...plant.zones].sort((a, b) => a - b).map(z => (
              <span className="zone-dot" key={z}>{z}</span>
            ))}
          </div>
        </div>

        <div className="info-grid">
          <InfoCell icon={sunIcon} label={t("sunlight")} value={guide.sun} />
          <InfoCell icon="water-outline" label={t("water")} value={guide.water} />
          <InfoCell icon="earth-outline" label={t("soil")} value={guide.soil} />
          <InfoCell icon="resize-outline" label={t("spacing")} value={guide.spacing} />
          <InfoCell icon="arrow-up-outline" label={t("height")} value={guide.height} />
          <InfoCell icon="calendar-outline" label={t("bloom_time")} value={guide.bloomTime} />
        </div>

        <h2 className="tips-title">{t("care_tips")}</h2>
        {guide.tips.map((tip, i) => (
          <div className="tip-row" key={i}>
            <span className="tip-bullet">{i + 1}</span>
            <span className="tip-text">{tip}</span>
          </div>
        ))}

        <div className="desc-card">
          <AppIcon name="information-circle-outline" size={16} color="var(--primary)" />
          <span>{plant.description}</span>
        </div>

        {companions.length > 0 && (
          <section className="plant-detail-section">
            <h2 className="plant-detail-section-title">
              Companion plants for {displayName}
            </h2>
            {companions.map(c => (
              <CompanionCard key={c.plant.id} plant={c.plant} benefit={c.benefit} benefitType={c.benefitType} />
            ))}
          </section>
        )}

        {avoidList.length > 0 && (
          <section className="plant-detail-section">
            <h2 className="plant-detail-section-title">Plants to avoid near {displayName}</h2>
            <div className="avoid-list">
              {avoidList.map(a => (
                <Link to={`/care/${a.plant.id}`} className="avoid-row" key={a.plant.id}>
                  <AppIcon name="alert-circle" size={16} color="var(--warning)" />
                  <div>
                    <div className="avoid-row-name">{getPlantName(a.plant, lang)}</div>
                    <p className="avoid-row-reason">{a.reason}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <Link to="/" className="plant-detail-cta">
          <AppIcon name="leaf" size={18} color="#fff" />
          Add {displayName} to a garden
        </Link>
      </div>
    </div>
  );
}
