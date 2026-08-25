import { AppIcon } from "@/components/AppIcon";
import "./ZoneBadge.css";

interface ZoneBadgeProps {
  zone: number | null;
  onClick?: () => void;
}

export default function ZoneBadge({ zone, onClick }: ZoneBadgeProps) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag className="zone-badge" onClick={onClick} type={onClick ? "button" : undefined}>
      <AppIcon name="location" size={14} color="var(--primary)" />
      <span className="zone-badge-text">{zone !== null ? `Zone ${zone}` : "Set Zone"}</span>
      {onClick && <AppIcon name="chevron-forward" size={12} color="var(--text-secondary)" />}
    </Tag>
  );
}
