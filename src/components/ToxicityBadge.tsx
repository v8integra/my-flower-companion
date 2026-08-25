import { AppIcon } from "@/components/AppIcon";
import { Plant } from "@/data/plants";
import "./ToxicityBadge.css";

interface ToxicityBadgeProps {
  plant: Plant;
  variant?: "icon" | "banner";
}

export default function ToxicityBadge({ plant, variant = "icon" }: ToxicityBadgeProps) {
  if (!plant.toxicity) return null;
  const color = plant.toxicity === "danger" ? "var(--danger)" : "var(--warning)";

  if (variant === "icon") {
    return (
      <span
        className={`toxicity-icon toxicity-icon-${plant.toxicity}`}
        title={plant.toxicityNote}
        aria-label={`Toxicity warning: ${plant.toxicityNote}`}
      >
        <AppIcon name="alert-circle" size={14} color={color} />
      </span>
    );
  }

  return (
    <div className={`toxicity-banner toxicity-banner-${plant.toxicity}`}>
      <AppIcon name="alert-circle" size={18} color={color} />
      <div>
        <div className="toxicity-banner-title">
          {plant.toxicity === "danger" ? "Toxic — use caution" : "Mildly toxic"}
        </div>
        <p className="toxicity-banner-note">{plant.toxicityNote}</p>
      </div>
    </div>
  );
}
