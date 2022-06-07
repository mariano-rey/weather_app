import { useLocation } from "../../contexts/LocationContext";
import { Footer as Container } from "../../styles/layout";

const Footer = () => {
  const { lastUpdated } = useLocation();
  return <Container>Ultima actualización: {lastUpdated}</Container>;
};

export default Footer;
