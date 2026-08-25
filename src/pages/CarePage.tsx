import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AppIcon } from "@/components/AppIcon";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { useLanguage } from "@/context/LanguageContext";
import { CARE_GUIDES } from "@/data/care";
import { PLANTS, Plant } from "@/data/plants";
import { getPlantName } from "@/translations/plant-names";
import ToxicityBadge from "@/components/ToxicityBadge";
import "./CarePage.css";

const DIFF_CLASS: Record<string, string> = { Easy: "diff-easy", Moderate: "diff-moderate", Expert: "diff-expert" };

export default function CarePage() {
  const { t, lang } = useLanguage();
  useDocumentMeta(
    `Plant Care Guide — ${PLANTS.length} Vegetables, Herbs & Flowers | My Flower Companion`,
    `Browse care guides for ${PLANTS.length} plants: sunlight, watering, spacing, and expert tips for vegetables, herbs, and flowers.`
  );
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | Plant["type"]>("all");

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
        <input className="search-input" placeholder={t("search_plants")} aria-label={t("search_plants")} value={search} onChange={e => setSearch(e.target.value)} />
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
            <Link key={item.id} to={`/care/${item.id}`} className="care-row">
              <div className={`care-row-icon plant-row-icon-${item.type}`}>
                <AppIcon name={item.icon} size={22} color="currentColor" />
              </div>
              <div className="care-row-info">
                <span className="care-row-name">
                  {getPlantName(item, lang)}
                  {item.toxicity && <ToxicityBadge plant={item} />}
                </span>
                <span className={`plant-row-type-${item.type}`}>{typeLabel[item.type]}</span>
              </div>
              {guide && <span className={`diff-badge-small ${DIFF_CLASS[guide.difficulty] ?? "diff-easy"}`}>{guide.difficulty}</span>}
              <AppIcon name="chevron-forward" size={16} color="var(--border)" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
