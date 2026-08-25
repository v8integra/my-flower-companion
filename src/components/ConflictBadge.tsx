import { AppIcon } from "@/components/AppIcon";
import { Plant } from "@/data/plants";
import "./ConflictBadge.css";

interface ConflictBadgeProps {
  conflicts: { plant: Plant; reason: string }[];
}

/** Small inline warning icon for a plant that clashes with something already in the garden. */
export default function ConflictBadge({ conflicts }: ConflictBadgeProps) {
  if (conflicts.length === 0) return null;
  const title = conflicts
    .map(c => `Doesn't pair well with ${c.plant.name} already in this garden: ${c.reason}`)
    .join("\n\n");
  return (
    <span className="conflict-icon" title={title} aria-label={`Planting caution: ${title}`}>
      <AppIcon name="alert-circle" size={14} color="var(--warning)" />
    </span>
  );
}
