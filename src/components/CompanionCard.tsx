import { AppIcon } from "@/components/AppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { Plant } from "@/data/plants";
import { getPlantName } from "@/translations/plant-names";
import "./CompanionCard.css";

type BenefitType = "pest-control" | "pollination" | "soil" | "growth" | "general";

interface CompanionCardProps {
  plant: Plant;
  benefit: string;
  benefitType: BenefitType;
}

const BENEFIT_CONFIG: Record<BenefitType, { icon: string; color: string; bg: string }> = {
  "pest-control": { icon: "shield-checkmark", color: "#C4634A", bg: "var(--soft-pink)" },
  "pollination":  { icon: "flower",           color: "var(--primary)", bg: "var(--soft-green)" },
  "soil":         { icon: "earth",            color: "#7A6A55", bg: "var(--soft)" },
  "growth":       { icon: "trending-up",      color: "#4A7C8A", bg: "#EBF5F7" },
  "general":      { icon: "leaf",             color: "var(--primary-dark)", bg: "var(--soft-green)" },
};

export default function CompanionCard({ plant, benefit, benefitType }: CompanionCardProps) {
  const { lang, t } = useLanguage();
  const config = BENEFIT_CONFIG[benefitType];
  const displayName = getPlantName(plant, lang);

  const typeLabel: Record<Plant["type"], string> = {
    flower: t("type_flower"),
    herb: t("type_herb"),
    vegetable: t("type_vegetable"),
  };

  const benefitLabel: Record<BenefitType, string> = {
    "pest-control": t("legend_pest_control"),
    "pollination":  t("legend_pollination"),
    "soil":         t("legend_soil"),
    "growth":       t("legend_growth"),
    "general":      t("legend_general"),
  };

  return (
    <div className="companion-card">
      <div className="companion-card-header">
        <div className="companion-card-icon-bg" style={{ background: config.bg }}>
          <AppIcon name={config.icon} size={20} color={config.color} />
        </div>
        <div className="companion-card-header-text">
          <div className="companion-card-name">{displayName}</div>
          <div className="companion-card-type">{typeLabel[plant.type]}</div>
        </div>
        <div className="companion-card-badge" style={{ background: config.bg, color: config.color }}>
          {benefitLabel[benefitType]}
        </div>
      </div>
      <p className="companion-card-benefit">{benefit}</p>
      <p className="companion-card-description">{plant.description}</p>
      <div className="companion-card-zone-row">
        <AppIcon name="location-outline" size={12} color="var(--text-secondary)" />
        <span>Zones {plant.zones[0]}–{plant.zones[plant.zones.length - 1]}</span>
      </div>
    </div>
  );
}
