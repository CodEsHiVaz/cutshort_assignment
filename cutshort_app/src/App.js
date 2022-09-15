import { Container } from "@chakra-ui/react";
import "./App.css";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import Logo from "./Components/Logo/Logo";
import Steper from "./Components/Steper/Steper.jsx";
function App() {
  return (
    <Container maxW={"container.sm"} mt={20}>
      <Logo />
      <Steper />
      <AllRoutes />
    </Container>
  );
}

export default App;
