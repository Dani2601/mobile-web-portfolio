import { createContext, useContext, useState, type ReactNode, } from "react";

export type PlatformType = "Mobile" | "Web";

type PlatformContextType = {
  selected: PlatformType;
  setSelected: (value: PlatformType) => void;
};

const PlatformContext = createContext<PlatformContextType | undefined>(
  undefined
);

export function PlatformProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<PlatformType>("Mobile");

  return (
    <PlatformContext.Provider value={{ selected, setSelected }}>
      {children}
    </PlatformContext.Provider>
  );
}

export function usePlatform() {
  const context = useContext(PlatformContext);
  if (!context) {
    throw new Error("usePlatform must be used inside PlatformProvider");
  }
  return context;
}