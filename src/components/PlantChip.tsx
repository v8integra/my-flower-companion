import { AppIcon } from "@/components/AppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { Plant } from "@/data/plants";
import { getPlantName } from "@/translations/plant-names";
import "./PlantChip.css";

interface PlantChipProps {
  plant: Plant;
  onRemove?: () => void;
  compact?: boolean;
}

export default function PlantChip({ plant, onRemove, compact = false }: PlantChipProps) {
  const { lang } = useLanguage();
  const displayName = getPlantName(plant, lang);

  return (
    <div className={`plant-chip plant-chip-${plant.type}${compact ? " plant-chip-compact" : ""}`}>
      <span className="plant-chip-name">{displayName}</span>
      {onRemove && (
        <button
          type="button"
          className="plant-chip-remove"
          onClick={onRemove}
          aria-label={`Remove ${displayName}`}
        >
          <AppIcon name="close" size={compact ? 12 : 14} color="currentColor" />
        </button>
      )}
    </div>
  );
}
