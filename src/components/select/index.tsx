import { Container } from "../../styles/components/select";

interface Props {
  options: string[];
}

const Select = ({ options }: Props) => {
  return (
    <Container>
      {options.map((label) => (
        <option key={label}>{label}</option>
      ))}
    </Container>
  );
};

export default Select;
