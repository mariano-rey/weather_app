import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import LocationProvider from "./providers/LocationProvider";
import { GlobalStyle } from "./styles/globalStyles";
import { Container } from "./styles/layout";

export const cities = [
  "Actual",
  "Bariloche",
  "Fortaleza",
  "Madrid",
  "Amsterdam",
  "Moscu",
];

function App() {
  return (
    <>
      <GlobalStyle />
      <LocationProvider>
        <Container>
          <Header />
          <Main />
          <Footer />
        </Container>
      </LocationProvider>
    </>
  );
}

export default App;
