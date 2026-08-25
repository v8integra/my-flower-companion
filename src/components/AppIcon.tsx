import { SVG_ICON_MAP, type SvgIconProps } from "./SvgIcons";

const SVG_ALIASES: Record<string, string> = {
  "bookmark-outline": "bookmark",
  nutrition: "nutrition-outline",
  water: "water-outline",
  x: "close",
};

const TEXT_FALLBACKS: Record<string, string> = {
  "alert-circle": "!",
  "arrow-up-outline": "↑",
  "bug-outline": "◉",
  "calendar-outline": "▦",
  earth: "◉",
  "earth-outline": "◉",
  "map-outline": "◫",
  remove: "−",
  "resize-outline": "↔",
  "shield-checkmark": "✓",
  "trending-up": "↑",
};

interface AppIconProps extends SvgIconProps {
  name: string;
  className?: string;
}

export function AppIcon({ name, size = 24, color = "#000", className }: AppIconProps) {
  const resolvedName = SVG_ALIASES[name] ?? name;
  const SvgComponent = SVG_ICON_MAP[resolvedName];

  if (SvgComponent) {
    return (
      <span className={className} style={{ display: "inline-flex", lineHeight: 0 }}>
        <SvgComponent size={size} color={color} />
      </span>
    );
  }

  const symbol = TEXT_FALLBACKS[name] ?? "·";
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.85,
        color,
        width: size,
        height: size,
        lineHeight: 1,
      }}
    >
      {symbol}
    </span>
  );
}
