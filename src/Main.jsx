import imgBackground from "./images/bg2.jpg";

import Logo from "./components/Logo";
import Background from "./components/Background";
import Borders from "./components/Borders";
import BorderButtons from "./components/BorderButtons";
import PokedexCSS from "./components/PokedexCSS";
import Pokeball from "./components/Pokeball";
import Switches from "./components/Switches";
import Ventilators from "./components/Ventilators";
import ButtonsGroup from "./components/ButtonsGroup";
import Screen from "./components/Screen";

function App() {
  return (
    <>
      <Background bg={imgBackground} />
      <Logo />
      <main>
        <Borders name="pokedex-border-1" />
        <Borders name="pokedex-border-2" />
        <BorderButtons />
        <PokedexCSS />
        <Screen />
        <Pokeball />
        <Switches />
        <Ventilators />
        <ButtonsGroup />
      </main>
    </>
  );
}

export default App;
