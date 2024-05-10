// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdNightlight, MdOutlineLightMode } from "react-icons/md";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="text-white">
      <button
        type="button"
        title="light mode"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="bg-transparent hover:bg-[rgba(255,255,255,0.1)] rounded-md p-2"
      >
        {theme === "light" ? (
          <MdNightlight
            size={25}
            className="transform -rotate-45"
            color="#333"
          />
        ) : (
          <MdOutlineLightMode size={25} />
        )}
      </button>
    </div>
  );
}
