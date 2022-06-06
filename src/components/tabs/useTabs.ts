import { useState } from "react";

export const useTabs = () => {
  const [active, setActive] = useState(0);
  const changeTab = (index: number) => setActive(index);

  return { active, changeTab };
};
