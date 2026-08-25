import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Plant } from "@/data/plants";

export interface Garden {
  id: string;
  name: string;
  plantIds: string[];
  zone: number | null;
  includeHerbs: boolean;
  includeVegetables: boolean;
  createdAt: string;
}

interface GardenContextType {
  gardens: Garden[];
  isLoading: boolean;
  createGarden: (name?: string) => Garden;
  updateGarden: (id: string, updates: Partial<Omit<Garden, "id" | "createdAt">>) => void;
  deleteGarden: (id: string) => void;
  resetGarden: (id: string) => void;
  addPlantToGarden: (gardenId: string, plantId: string) => void;
  removePlantFromGarden: (gardenId: string, plantId: string) => void;
  globalZone: number | null;
  setGlobalZone: (zone: number | null) => void;
  customPlants: Plant[];
  addCustomPlant: (name: string, type: Plant["type"]) => Plant;
  removeCustomPlant: (id: string) => void;
}

const GardenContext = createContext<GardenContextType | null>(null);
const STORAGE_KEY = "myflowercompanion_gardens_v2";
const ZONE_KEY = "myflowercompanion_zone";
const CUSTOM_PLANTS_KEY = "myflowercompanion_custom_plants";

const ICON_BY_TYPE: Record<Plant["type"], string> = {
  flower: "flower",
  herb: "leaf",
  vegetable: "nutrition",
};

function generateId(): string {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

export function GardenProvider({ children }: { children: React.ReactNode }) {
  const [gardens, setGardens] = useState<Garden[]>([]);
  const [globalZone, setGlobalZoneState] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [customPlants, setCustomPlants] = useState<Plant[]>([]);

  useEffect(() => {
    try {
      const gardenData = localStorage.getItem(STORAGE_KEY);
      const zoneData = localStorage.getItem(ZONE_KEY);
      const customData = localStorage.getItem(CUSTOM_PLANTS_KEY);
      if (gardenData) setGardens(JSON.parse(gardenData));
      if (zoneData) setGlobalZoneState(parseInt(zoneData, 10));
      if (customData) setCustomPlants(JSON.parse(customData));
    } catch {}
    setIsLoading(false);
  }, []);

  const save = useCallback((updated: Garden[]) => {
    setGardens(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  }, []);

  const saveCustomPlants = useCallback((updated: Plant[]) => {
    setCustomPlants(updated);
    try {
      localStorage.setItem(CUSTOM_PLANTS_KEY, JSON.stringify(updated));
    } catch {}
  }, []);

  const setGlobalZone = useCallback((zone: number | null) => {
    setGlobalZoneState(zone);
    setGardens(prev => {
      const updated = prev.map(g => ({ ...g, zone }));
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
    try {
      if (zone !== null) {
        localStorage.setItem(ZONE_KEY, zone.toString());
      } else {
        localStorage.removeItem(ZONE_KEY);
      }
    } catch {}
  }, []);

  const createGarden = useCallback((name?: string): Garden => {
    const count = gardens.length + 1;
    const garden: Garden = {
      id: generateId(),
      name: name || `Garden ${count}`,
      plantIds: [],
      zone: globalZone,
      includeHerbs: false,
      includeVegetables: false,
      createdAt: new Date().toISOString(),
    };
    const updated = [...gardens, garden];
    save(updated);
    return garden;
  }, [gardens, globalZone, save]);

  const updateGarden = useCallback((id: string, updates: Partial<Omit<Garden, "id" | "createdAt">>) => {
    const updated = gardens.map(g => g.id === id ? { ...g, ...updates } : g);
    save(updated);
  }, [gardens, save]);

  const deleteGarden = useCallback((id: string) => {
    save(gardens.filter(g => g.id !== id));
  }, [gardens, save]);

  const resetGarden = useCallback((id: string) => {
    const updated = gardens.map(g => g.id === id ? { ...g, plantIds: [] } : g);
    save(updated);
  }, [gardens, save]);

  const addPlantToGarden = useCallback((gardenId: string, plantId: string) => {
    const updated = gardens.map(g =>
      g.id === gardenId && !g.plantIds.includes(plantId)
        ? { ...g, plantIds: [...g.plantIds, plantId] }
        : g
    );
    save(updated);
  }, [gardens, save]);

  const removePlantFromGarden = useCallback((gardenId: string, plantId: string) => {
    const updated = gardens.map(g =>
      g.id === gardenId
        ? { ...g, plantIds: g.plantIds.filter(pid => pid !== plantId) }
        : g
    );
    save(updated);
  }, [gardens, save]);

  const addCustomPlant = useCallback((name: string, type: Plant["type"]): Plant => {
    const plant: Plant = {
      id: "custom_" + generateId(),
      name: name.trim(),
      type,
      zones: [1,2,3,4,5,6,7,8,9,10,11],
      description: "Custom plant",
      icon: ICON_BY_TYPE[type],
    };
    saveCustomPlants([...customPlants, plant]);
    return plant;
  }, [customPlants, saveCustomPlants]);

  const removeCustomPlant = useCallback((id: string) => {
    saveCustomPlants(customPlants.filter(p => p.id !== id));
    const updatedGardens = gardens.map(g => ({
      ...g,
      plantIds: g.plantIds.filter(pid => pid !== id),
    }));
    save(updatedGardens);
  }, [customPlants, saveCustomPlants, gardens, save]);

  return (
    <GardenContext.Provider value={{
      gardens, isLoading, createGarden, updateGarden, deleteGarden,
      resetGarden, addPlantToGarden, removePlantFromGarden,
      globalZone, setGlobalZone,
      customPlants, addCustomPlant, removeCustomPlant,
    }}>
      {children}
    </GardenContext.Provider>
  );
}

export function useGarden() {
  const ctx = useContext(GardenContext);
  if (!ctx) throw new Error("useGarden must be used within GardenProvider");
  return ctx;
}
