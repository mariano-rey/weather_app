import { cities } from "../../App";
import { useLocation } from "../../contexts/LocationContext";
import useMediaQuery from "../../hooks/useMediaQuery";
import { IOptions } from "../../hooks/useOptions";
import { Header as HeaderContainer } from "../../styles/layout";
import Select from "../select";
import Tabs from "../tabs";

const Header = () => {
  const { isTablet } = useMediaQuery();
  const { location, setLocation } = useLocation();

  const props: IOptions = {
    active: location || 0,
    options: cities,
    onChange: setLocation,
  };
  const Children = isTablet ? Select : Tabs;

  return (
    <HeaderContainer>
      <Children {...props} />
    </HeaderContainer>
  );
};

export default Header;
