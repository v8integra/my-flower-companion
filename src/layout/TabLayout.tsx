import { NavLink, Outlet } from "react-router-dom";
import { AppIcon } from "@/components/AppIcon";
import { useLanguage } from "@/context/LanguageContext";
import "./TabLayout.css";

const TABS = [
  { to: "/", icon: "leaf", labelKey: "tab_gardens", end: true },
  { to: "/settings", icon: "location", labelKey: "tab_zone", end: false },
  { to: "/care", icon: "heart-circle-outline", labelKey: "tab_care", end: false },
  { to: "/about", icon: "information-circle-outline", labelKey: "tab_about", end: false },
] as const;

export default function TabLayout() {
  const { t } = useLanguage();

  return (
    <div className="tab-layout">
      <div className="tab-layout-content">
        <Outlet />
      </div>
      <nav className="tab-bar">
        {TABS.map(tab => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) => "tab-bar-item" + (isActive ? " tab-bar-item-active" : "")}
          >
            {({ isActive }) => (
              <>
                <AppIcon name={tab.icon} size={22} color={isActive ? "var(--primary)" : "#9EB4A2"} />
                <span>{t(tab.labelKey)}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
