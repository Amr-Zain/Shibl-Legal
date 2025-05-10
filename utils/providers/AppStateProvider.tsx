"use client";

import { useEffect } from "react";
import { appStore, SettingsType } from "@/stores/app";

export default function AppStateProvider({
  initialData,
}: {
  initialData: SettingsType;
}) {
  const setSettings = appStore((state) => state.setSettings);

  useEffect(() => {
    if (initialData) {
      setSettings(initialData);
    }
  }, [initialData, setSettings]);

  return null;
}
