import { useMemo, useState } from "react";
import { AppIcon } from "@/components/AppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { PLANTS, Plant } from "@/data/plants";
import { CARE_GUIDES, CareGuide } from "@/data/care";
import { getPlantName } from "@/translations/plant-names";
import PLANT_IMAGES from "@/data/plant-images";
import "./CarePage.css";

const SUN_ICON: Record<string, string> = {
  "Full Sun": "sunny",
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

function CareModal({ plant, guide, onClose }: { plant: Plant; guide: CareGuide; onClose: () => void }) {
  const { t, lang } = useLanguage();
  const sunIcon = SUN_ICON[guide.sun] ?? "partly-sunny";
  const imageUrl = PLANT_IMAGES[plant.id];

  const typeLabel: Record<Plant["type"], string> = {
    flower: t("type_flower"), herb: t("type_herb"), vegetable: t("type_vegetable"),
  };
  const diffLabel: Record<string, string> = {
    Easy: t("difficulty_easy"), Moderate: t("difficulty_moderate"), Expert: t("difficulty_expert"),
  };

  const allZonesLabel = t("all_zones");
  const zoneRangeFn = (min: number, max: number) => t("zone_range_fmt", { min, max });
  const zoneSingleFn = (n: number) => t("zone_single_fmt", { n });

  return (
    <div className="modal-overlay modal-overlay-bottom" onClick={onClose}>
      <div className="sheet-card care-sheet" onClick={e => e.stopPropagation()}>
        <div className="sheet-handle" />
        <div className="care-sheet-header">
          <div className={`care-sheet-icon-bg plant-row-icon-${plant.type}`}>
            <AppIcon name={plant.icon} size={24} color="currentColor" />
          </div>
          <div className="care-sheet-title-col">
            <div className="care-sheet-title">{getPlantName(plant, lang)}</div>
            <div className={`care-sheet-type plant-row-type-${plant.type}`}>{typeLabel[plant.type]}</div>
          </div>
          <div className={`diff-badge ${DIFF_CLASS[guide.difficulty] ?? "diff-easy"}`}>
            {diffLabel[guide.difficulty] ?? guide.difficulty}
          </div>
          <button className="icon-btn" onClick={onClose}>
            <AppIcon name="close" size={22} color="var(--text-secondary)" />
          </button>
        </div>

        <div className="care-sheet-scroll">
          {imageUrl && <img src={imageUrl} alt={getPlantName(plant, lang)} className="care-plant-image" loading="lazy" />}

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
            <InfoCell icon={sunIcon === "sunny" ? "sunny-outline" : sunIcon} label={t("sunlight")} value={guide.sun} />
            <InfoCell icon="water-outline" label={t("water")} value={guide.water} />
            <InfoCell icon="earth-outline" label={t("soil")} value={guide.soil} />
            <InfoCell icon="resize-outline" label={t("spacing")} value={guide.spacing} />
            <InfoCell icon="arrow-up-outline" label={t("height")} value={guide.height} />
            <InfoCell icon="calendar-outline" label={t("bloom_time")} value={guide.bloomTime} />
          </div>

          <h4 className="tips-title">{t("care_tips")}</h4>
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
        </div>
      </div>
    </div>
  );
}

export default function CarePage() {
  const { t, lang } = useLanguage();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | Plant["type"]>("all");
  const [selected, setSelected] = useState<{ plant: Plant; guide: CareGuide } | null>(null);

  const sortedPlants = useMemo(
    () => [...PLANTS].sort((a, b) => getPlantName(a, lang).localeCompare(getPlantName(b, lang))),
    [lang]
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return sortedPlants.filter(p => {
      if (filter !== "all" && p.type !== filter) return false;
      if (q && !p.name.toLowerCase().includes(q) && !getPlantName(p, lang).toLowerCase().includes(q)) return false;
      return true;
    });
  }, [search, filter, sortedPlants, lang]);

  const filterLabels: Record<string, string> = {
    all: t("filter_all"), flower: t("filter_flowers"), herb: t("filter_herbs"), vegetable: t("filter_vegetables"),
  };
  const typeLabel: Record<Plant["type"], string> = {
    flower: t("type_flower"), herb: t("type_herb"), vegetable: t("type_vegetable"),
  };

  return (
    <div className="care-page">
      <div className="care-header">
        <h1>{t("plant_care")}</h1>
        <p>{t("plants_in_db", { n: PLANTS.length })}</p>
      </div>

      <div className="search-row">
        <AppIcon name="search" size={18} color="var(--text-secondary)" />
        <input className="search-input" placeholder={t("search_plants")} value={search} onChange={e => setSearch(e.target.value)} />
        {search.length > 0 && (
          <button className="clear-search-btn" onClick={() => setSearch("")}>
            <AppIcon name="close-circle" size={18} color="var(--text-secondary)" />
          </button>
        )}
      </div>

      <div className="filter-row">
        {(["all", "flower", "herb", "vegetable"] as const).map(f => (
          <button key={f} className={"filter-btn" + (filter === f ? " filter-btn-active" : "")} onClick={() => setFilter(f)}>
            {filterLabels[f]}
          </button>
        ))}
      </div>

      <div className="care-list">
        {filtered.map(item => {
          const guide = CARE_GUIDES[item.id];
          return (
            <button
              key={item.id}
              className="care-row"
              onClick={() => guide && setSelected({ plant: item, guide })}
              disabled={!guide}
            >
              <div className={`care-row-icon plant-row-icon-${item.type}`}>
                <AppIcon name={item.icon} size={22} color="currentColor" />
              </div>
              <div className="care-row-info">
                <span className="care-row-name">{getPlantName(item, lang)}</span>
                <span className={`plant-row-type-${item.type}`}>{typeLabel[item.type]}</span>
              </div>
              {guide && <span className={`diff-badge-small ${DIFF_CLASS[guide.difficulty] ?? "diff-easy"}`}>{guide.difficulty}</span>}
              <AppIcon name="chevron-forward" size={16} color="var(--border)" />
            </button>
          );
        })}
      </div>

      {selected && (
        <CareModal plant={selected.plant} guide={selected.guide} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
