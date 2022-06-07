import useOptions, { IOptions } from "../../hooks/useOptions";
import { TabButton } from "../../styles/components/tabs";

const Tabs = (props: IOptions) => {
  const { activeValue, options, onChange } = useOptions(props);

  return (
    <>
      {options.map(({ value, label }) => (
        <TabButton
          key={label}
          isActive={value === activeValue}
          onClick={() => onChange(value)}
        >
          {label}
        </TabButton>
      ))}
    </>
  );
};

export default Tabs;
