import Select from "./components/select";
import Tabs from "./components/tabs";
import { useTabs } from "./components/tabs/useTabs";
import useMediaQuery from "./hooks/useMediaQuery";
import { GlobalStyle } from "./styles/globalStyles";
import { Container, Footer, Header, Main } from "./styles/layout";

const cities = [
  "Actual",
  "Bariloche",
  "Fortaleza",
  "Madrid",
  "Amsterdam",
  "Moscu",
];

function App() {
  const { isTablet } = useMediaQuery();
  const { active, changeTab } = useTabs();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          {isTablet ? (
            <Select options={cities} />
          ) : (
            <Tabs active={active} tabs={cities} onChange={changeTab} />
          )}
        </Header>
        <Main>TEST {cities[active]}</Main>
        <Footer>Ultima actualización: </Footer>
      </Container>
    </>
  );
}

export default App;
