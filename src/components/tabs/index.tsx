import { TabButton } from "../../styles/components/tabs";

interface Props {
  active: number;
  tabs: string[];
  onChange: (index: number) => void;
}

const Tabs = ({ active, tabs, onChange }: Props) => {
  return (
    <>
      {tabs.map((label, index) => (
        <TabButton
          key={label}
          isActive={index === active}
          onClick={() => onChange(index)}
        >
          {label}
        </TabButton>
      ))}
    </>
  );
};

export default Tabs;
