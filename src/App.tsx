import { HashRouter, Routes, Route } from "react-router-dom";
import { GardenProvider } from "@/context/GardenContext";
import { LanguageProvider } from "@/context/LanguageContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import TabLayout from "@/layout/TabLayout";
import GardensPage from "@/pages/GardensPage";
import SettingsPage from "@/pages/SettingsPage";
import CarePage from "@/pages/CarePage";
import AboutPage from "@/pages/AboutPage";
import GardenDetailPage from "@/pages/GardenDetailPage";
import AddPlantPage from "@/pages/AddPlantPage";
import CompanionsPage from "@/pages/CompanionsPage";

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <GardenProvider>
          <HashRouter>
            <Routes>
              <Route element={<TabLayout />}>
                <Route path="/" element={<GardensPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/care" element={<CarePage />} />
                <Route path="/about" element={<AboutPage />} />
              </Route>
              <Route path="/garden/:id" element={<GardenDetailPage />} />
              <Route path="/garden/:id/add-plant" element={<AddPlantPage />} />
              <Route path="/garden/:id/companions" element={<CompanionsPage />} />
            </Routes>
          </HashRouter>
        </GardenProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
