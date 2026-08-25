import React from "react";
import { AppIcon } from "@/components/AppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { PLANTS } from "@/data/plants";
import { COMPANION_TIPS, COMPANION_TIPS_TITLE } from "@/translations/companion-tips";
import "./AboutPage.css";

const flowerCount = PLANTS.filter(p => p.type === "flower").length;
const herbCount = PLANTS.filter(p => p.type === "herb").length;
const vegCount = PLANTS.filter(p => p.type === "vegetable").length;

const TIP_ICONS: string[] = ["bug-outline", "sunny-outline", "water-outline", "color-filter-outline", "leaf-outline"];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="about-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Step({ number, title, body }: { number: number; title: string; body: string }) {
  return (
    <div className="about-step">
      <div className="about-step-num">{number}</div>
      <div className="about-step-body">
        <div className="about-step-title">{title}</div>
        <div className="about-step-text">{body}</div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { t, lang } = useLanguage();
  const tips = COMPANION_TIPS[lang];
  const tipsTitle = COMPANION_TIPS_TITLE[lang];

  const benefitTypes = [
    { color: "#D94F4F", bg: "#FDEAEA", label: t("legend_pest_control"), desc: t("legend_pest_desc") },
    { color: "#7B68EE", bg: "#EEEAFF", label: t("legend_pollination"), desc: t("legend_pollination_desc") },
    { color: "#4A7C59", bg: "#EDF5F0", label: t("legend_soil"), desc: t("legend_soil_desc") },
    { color: "#E8845A", bg: "#FEF0EB", label: t("legend_growth"), desc: t("legend_growth_desc") },
    { color: "#6B7E6E", bg: "#F9F4EE", label: t("legend_general"), desc: t("legend_general_desc") },
  ];

  const customTips = [
    { icon: "add-circle-outline", text: t("about_custom_tip1") },
    { icon: "search-outline", text: t("about_custom_tip2") },
    { icon: "create-outline", text: t("about_custom_tip3") },
    { icon: "bookmark-outline", text: t("about_custom_tip4") },
    { icon: "information-circle-outline", text: t("about_custom_tip5") },
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-icon">
          <AppIcon name="flower" size={40} color="var(--primary)" />
        </div>
        <h1>My Flower Companion</h1>
        <p>{t("about_hero")}</p>
      </div>

      <div className="about-stats-row">
        <div className="about-stat-card">
          <div className="about-stat-num">{flowerCount}</div>
          <div className="about-stat-label">{t("stat_flowers")}</div>
        </div>
        <div className="about-stat-card">
          <div className="about-stat-num">{herbCount}</div>
          <div className="about-stat-label">{t("stat_herbs")}</div>
        </div>
        <div className="about-stat-card">
          <div className="about-stat-num">{vegCount}</div>
          <div className="about-stat-label">{t("stat_vegetables")}</div>
        </div>
      </div>

      <Section title={t("about_companion_title")}>
        <div className="about-card">
          <p className="about-body-text">{t("about_companion_body1")}</p>
          <p className="about-body-text" style={{ marginTop: 10 }}>{t("about_companion_body2")}</p>
        </div>
      </Section>

      <Section title={t("about_howto_title")}>
        <Step number={1} title={t("step1_title")} body={t("step1_body")} />
        <Step number={2} title={t("step2_title")} body={t("step2_body")} />
        <Step number={3} title={t("step3_title")} body={t("step3_body")} />
        <Step number={4} title={t("step4_title")} body={t("step4_body")} />
        <Step number={5} title={t("step5_title")} body={t("step5_body")} />
        <Step number={6} title={t("step6_title")} body={t("step6_body")} />
      </Section>

      <Section title={t("about_custom_title")}>
        <div className="about-card">
          {customTips.map((item, i) => (
            <div className={"about-tip-row" + (i > 0 ? " about-tip-border" : "")} key={i}>
              <span className="about-tip-icon-bg">
                <AppIcon name={item.icon} size={16} color="var(--primary)" />
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title={tipsTitle}>
        <div className="about-card">
          {tips.map((tip, i) => (
            <div className={"about-tip-row" + (i > 0 ? " about-tip-border" : "")} key={i}>
              <span className="about-tip-icon-bg">
                <AppIcon name={TIP_ICONS[i] ?? "leaf-outline"} size={16} color="var(--primary)" />
              </span>
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t("about_benefit_title")}>
        <div className="about-card">
          {benefitTypes.map((b, i) => (
            <div className={"about-benefit-row" + (i > 0 ? " about-tip-border" : "")} key={i}>
              <span className="about-benefit-dot" style={{ background: b.bg, borderColor: b.color }}>
                <span className="about-benefit-inner" style={{ background: b.color }} />
              </span>
              <div className="about-benefit-info">
                <div className="about-benefit-label" style={{ color: b.color }}>{b.label}</div>
                <div className="about-benefit-desc">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="about-footer">
        <p>MyFlowerCompanion · Version 1.0</p>
        <p>All plant data stored locally in your browser</p>
      </div>
    </div>
  );
}
