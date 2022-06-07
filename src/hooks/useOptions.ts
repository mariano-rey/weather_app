import { useMemo } from "react";

export interface IOptions {
  active: number;
  options: string[] | { value: string | number; label: string }[];
  onChange?: (index: number) => void;
}

export default ({ active, options, onChange }: IOptions) => {
  const objOptions = useMemo(
    () =>
      options.map((item) => {
        const value = typeof item === "object" ? item.value.toString() : item;
        const label = typeof item === "object" ? item.label : item;
        return { value, label };
      }),
    [options]
  );

  const handleChange = (value: string) => {
    const index = objOptions.findIndex((x) => x.value === value);
    onChange && onChange(index);
  };

  return {
    activeValue: objOptions[active].value,
    options: objOptions,
    onChange: handleChange,
  };
};
