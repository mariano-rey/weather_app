import React, { useState } from "react";
import { LocationContext } from "../contexts/LocationContext";

type IState = { active: number; lastUpdated: Date | null };

const LocationProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const [state, setActive] = useState<IState>({
    active: 0,
    lastUpdated: null,
  });
  const changeActive = (index: number) =>
    setActive((acc) => ({ ...acc, active: index }));

  return (
    <LocationContext.Provider
      value={{
        location: state.active,
        setLocation: changeActive,
        lastUpdated: state.lastUpdated,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
