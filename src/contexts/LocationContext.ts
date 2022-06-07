import { createContext, useContext } from "react";

type ILocation = {
  location: number;
  setLocation: (index: number) => void;
  lastUpdated: Date | null;
};

export const LocationContext = createContext<ILocation | null>(null);

export const useLocation = () => {
  const { lastUpdated, ...etc } = useContext(LocationContext) || {};
  return {
    ...etc,
    lastUpdated:
      lastUpdated?.toLocaleString("es-ES", {
        dateStyle: "long",
        timeStyle: "short",
      }) || "Sin datos",
  };
};
