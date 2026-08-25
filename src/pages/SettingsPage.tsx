import { useState } from "react";
import { AppIcon } from "@/components/AppIcon";
import Modal from "@/components/Modal";
import { useGarden } from "@/context/GardenContext";
import { useLanguage } from "@/context/LanguageContext";
import "./SettingsPage.css";

const STATE_ZONES: Record<string, number> = {
  AL: 8, AK: 4, AZ: 9, AR: 7, CA: 9, CO: 5, CT: 6, DE: 7, FL: 9, GA: 8,
  HI: 12, ID: 6, IL: 5, IN: 5, IA: 5, KS: 6, KY: 6, LA: 9, ME: 5, MD: 7,
  MA: 6, MI: 6, MN: 4, MS: 8, MO: 6, MT: 4, NE: 5, NV: 7, NH: 5, NJ: 7,
  NM: 7, NY: 6, NC: 7, ND: 3, OH: 6, OK: 7, OR: 8, PA: 6, RI: 6, SC: 8,
  SD: 4, TN: 7, TX: 8, UT: 6, VT: 5, VA: 7, WA: 8, WV: 6, WI: 5, WY: 5,
  DC: 7,
};

const STATE_NAME_TO_ABBR: Record<string, string> = {
  ALABAMA: "AL", ALASKA: "AK", ARIZONA: "AZ", ARKANSAS: "AR", CALIFORNIA: "CA",
  COLORADO: "CO", CONNECTICUT: "CT", DELAWARE: "DE", FLORIDA: "FL", GEORGIA: "GA",
  HAWAII: "HI", IDAHO: "ID", ILLINOIS: "IL", INDIANA: "IN", IOWA: "IA",
  KANSAS: "KS", KENTUCKY: "KY", LOUISIANA: "LA", MAINE: "ME", MARYLAND: "MD",
  MASSACHUSETTS: "MA", MICHIGAN: "MI", MINNESOTA: "MN", MISSISSIPPI: "MS",
  MISSOURI: "MO", MONTANA: "MT", NEBRASKA: "NE", NEVADA: "NV",
  "NEW HAMPSHIRE": "NH", "NEW JERSEY": "NJ", "NEW MEXICO": "NM", "NEW YORK": "NY",
  "NORTH CAROLINA": "NC", "NORTH DAKOTA": "ND", OHIO: "OH", OKLAHOMA: "OK",
  OREGON: "OR", PENNSYLVANIA: "PA", "RHODE ISLAND": "RI", "SOUTH CAROLINA": "SC",
  "SOUTH DAKOTA": "SD", TENNESSEE: "TN", TEXAS: "TX", UTAH: "UT", VERMONT: "VT",
  VIRGINIA: "VA", WASHINGTON: "WA", "WEST VIRGINIA": "WV", WISCONSIN: "WI",
  WYOMING: "WY", "DISTRICT OF COLUMBIA": "DC",
};

function estimateZoneFromZip(zip: string): number | null {
  const prefix = parseInt(zip.substring(0, 3), 10);
  if (isNaN(prefix)) return null;
  if (prefix >= 995 && prefix <= 999) return 4;
  if (prefix >= 967 && prefix <= 968) return 12;
  if (prefix >= 980 && prefix <= 986) return 8;
  if (prefix >= 987 && prefix <= 994) return 6;
  if (prefix >= 970 && prefix <= 974) return 9;
  if (prefix >= 975 && prefix <= 979) return 6;
  if (prefix >= 940 && prefix <= 961) return 9;
  if (prefix >= 900 && prefix <= 939) return 10;
  if (prefix >= 889 && prefix <= 891) return 9;
  if (prefix >= 892 && prefix <= 898) return 7;
  if (prefix >= 850 && prefix <= 865) return 9;
  if (prefix >= 870 && prefix <= 884) return 7;
  if (prefix >= 840 && prefix <= 847) return 6;
  if (prefix >= 832 && prefix <= 838) return 6;
  if (prefix >= 590 && prefix <= 599) return 4;
  if (prefix >= 820 && prefix <= 831) return 5;
  if (prefix >= 800 && prefix <= 816) return 5;
  if (prefix >= 785 && prefix <= 799) return 9;
  if (prefix >= 760 && prefix <= 784) return 8;
  if (prefix >= 750 && prefix <= 759) return 7;
  if (prefix >= 730 && prefix <= 749) return 7;
  if (prefix >= 716 && prefix <= 729) return 7;
  if (prefix >= 700 && prefix <= 715) return 9;
  if (prefix >= 386 && prefix <= 397) return 8;
  if (prefix >= 350 && prefix <= 369) return 8;
  if (prefix >= 370 && prefix <= 385) return 7;
  if (prefix >= 300 && prefix <= 319) return 8;
  if (prefix >= 330 && prefix <= 349) return 10;
  if (prefix >= 320 && prefix <= 329) return 9;
  if (prefix >= 290 && prefix <= 299) return 8;
  if (prefix >= 270 && prefix <= 289) return 7;
  if (prefix >= 220 && prefix <= 246) return 7;
  if (prefix >= 247 && prefix <= 268) return 6;
  if (prefix >= 200 && prefix <= 219) return 7;
  if (prefix >= 197 && prefix <= 199) return 7;
  if (prefix >= 150 && prefix <= 196) return 6;
  if (prefix >= 100 && prefix <= 119) return 7;
  if (prefix >= 120 && prefix <= 149) return 5;
  if (prefix >= 70 && prefix <= 89) return 7;
  if (prefix >= 60 && prefix <= 69) return 6;
  if (prefix >= 28 && prefix <= 29) return 6;
  if (prefix >= 10 && prefix <= 27) return 6;
  if (prefix >= 50 && prefix <= 59) return 5;
  if (prefix >= 30 && prefix <= 38) return 5;
  if (prefix >= 39 && prefix <= 49) return 5;
  if (prefix >= 660 && prefix <= 679) return 6;
  if (prefix >= 680 && prefix <= 693) return 5;
  if (prefix >= 570 && prefix <= 577) return 4;
  if (prefix >= 580 && prefix <= 588) return 3;
  if (prefix >= 550 && prefix <= 567) return 4;
  if (prefix >= 500 && prefix <= 528) return 5;
  if (prefix >= 630 && prefix <= 658) return 6;
  if (prefix >= 530 && prefix <= 549) return 5;
  if (prefix >= 480 && prefix <= 499) return 6;
  if (prefix >= 600 && prefix <= 629) return 5;
  if (prefix >= 460 && prefix <= 479) return 5;
  if (prefix >= 430 && prefix <= 459) return 6;
  if (prefix >= 400 && prefix <= 427) return 6;
  return null;
}

function zoneFromLatitude(lat: number): number {
  if (lat > 49) return 3;
  if (lat > 45) return 4;
  if (lat > 41) return 5;
  if (lat > 37) return 6;
  if (lat > 33) return 7;
  if (lat > 29) return 8;
  if (lat > 25) return 9;
  return 10;
}

const ZONES = Array.from({ length: 13 }, (_, i) => i + 1);

export default function SettingsPage() {
  const { globalZone, setGlobalZone } = useGarden();
  const { t } = useLanguage();
  const [locationInput, setLocationInput] = useState("");
  const [detecting, setDetecting] = useState(false);
  const [message, setMessage] = useState<{ title: string; body: string } | null>(null);

  const handleAutoDetect = () => {
    if (!navigator.geolocation) {
      setMessage({ title: "Location Unavailable", body: "Your browser doesn't support geolocation. Please enter your zone manually." });
      return;
    }
    setDetecting(true);
    navigator.geolocation.getCurrentPosition(
      pos => {
        const zone = zoneFromLatitude(pos.coords.latitude);
        setGlobalZone(zone);
        setDetecting(false);
        setMessage({ title: "Zone Detected", body: `Your planting zone is estimated as Zone ${zone} based on your location.` });
      },
      () => {
        setDetecting(false);
        setMessage({ title: "Location Unavailable", body: "Could not detect location. Please enter your zone manually." });
      }
    );
  };

  const handleLocationLookup = () => {
    const raw = locationInput.trim();
    if (!raw) return;

    if (/^\d{5}$/.test(raw)) {
      const zone = estimateZoneFromZip(raw);
      if (!zone) {
        setMessage({ title: "Unknown ZIP", body: "Could not determine zone from that ZIP code. Try selecting manually." });
        return;
      }
      setGlobalZone(zone);
      setMessage({ title: "Zone Found", body: `Zone ${zone} estimated from ZIP ${raw}.` });
      return;
    }

    let stateAbbr: string | null = null;
    const commaMatch = raw.match(/,\s*([A-Za-z\s]+)$/);
    if (commaMatch) {
      const part = commaMatch[1].trim().toUpperCase();
      stateAbbr = STATE_ZONES[part] ? part : STATE_NAME_TO_ABBR[part] ?? null;
    }

    if (!stateAbbr) {
      const upper = raw.toUpperCase();
      stateAbbr = STATE_ZONES[upper] ? upper : STATE_NAME_TO_ABBR[upper] ?? null;
    }

    if (stateAbbr && STATE_ZONES[stateAbbr]) {
      const zone = STATE_ZONES[stateAbbr];
      setGlobalZone(zone);
      setMessage({ title: "Zone Found", body: `Zone ${zone} estimated for ${stateAbbr}.` });
      return;
    }

    setMessage({
      title: "Not Found",
      body: 'Enter a 5-digit ZIP code, a state abbreviation (e.g. "TX"), or "City, ST" (e.g. "Austin, TX").',
    });
  };

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1>{t("zone_title")}</h1>
        <p>{t("zone_subtitle")}</p>
      </div>

      {globalZone !== null && (
        <div className="current-zone">
          <AppIcon name="location" size={24} color="var(--primary)" />
          <div className="current-zone-text">
            <span className="current-zone-label">{t("current_zone")}</span>
            <span className="current-zone-value">{t("zone_label", { n: globalZone })}</span>
          </div>
          <button className="btn-secondary" onClick={() => setGlobalZone(null)}>{t("clear")}</button>
        </div>
      )}

      <div className="settings-section">
        <h3>{t("auto_detect")}</h3>
        <p>{t("auto_detect_desc")}</p>
        <button className="btn-primary detect-btn" onClick={handleAutoDetect} disabled={detecting}>
          <AppIcon name="navigate" size={18} color="#fff" />
          {detecting ? t("detecting") : t("detect_my_zone")}
        </button>
      </div>

      <div className="divider">
        <div className="divider-line" />
        <span>{t("or")}</span>
        <div className="divider-line" />
      </div>

      <div className="settings-section">
        <h3>{t("lookup_title")}</h3>
        <p>{t("lookup_desc")}</p>
        <div className="lookup-row">
          <input
            className="text-input flex-1"
            placeholder={t("lookup_placeholder")}
            aria-label={t("lookup_title")}
            value={locationInput}
            onChange={e => setLocationInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleLocationLookup()}
          />
          <button className="btn-primary lookup-btn" onClick={handleLocationLookup}>{t("look_up")}</button>
        </div>
      </div>

      <div className="settings-section">
        <h3>{t("select_zone")}</h3>
        <div className="zone-grid">
          {ZONES.map(z => (
            <button
              key={z}
              className={"zone-btn" + (globalZone === z ? " zone-btn-active" : "")}
              onClick={() => setGlobalZone(z)}
            >
              {z}
            </button>
          ))}
        </div>
      </div>

      <div className="info-box">
        <AppIcon name="information-circle-outline" size={16} color="var(--text-secondary)" />
        <p>{t("zone_info")}</p>
      </div>

      {message && (
        <Modal onClose={() => setMessage(null)} ariaLabel={message.title} panelClassName="modal-card">
          <h3 className="modal-title">{message.title}</h3>
          <p className="modal-message">{message.body}</p>
          <div className="modal-actions">
            <button className="btn-primary flex-1" onClick={() => setMessage(null)}>OK</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
