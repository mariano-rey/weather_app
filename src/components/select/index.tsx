import useOptions, { IOptions } from "../../hooks/useOptions";
import { Container } from "../../styles/components/select";

const Select = (props: IOptions) => {
  const { activeValue, options, onChange } = useOptions(props);

  return (
    <Container value={activeValue} onChange={(e) => onChange(e.target.value)}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Container>
  );
};

export default Select;
