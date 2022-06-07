import { cities } from "../../App";
import { useLocation } from "../../contexts/LocationContext";
import { Main as Container } from "../../styles/layout";

const Main = () => {
  const { location = 0 } = useLocation();

  return <Container>{cities[location]}</Container>;
};

export default Main;
