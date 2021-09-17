import img1 from "./images/bg1.jpg";
import img2 from "./images/bg2.jpg";
import img3 from "./images/bg3.png";

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
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <>
      <Background bg={[img1, img2, img3]} />
      <Logo />
      <SideMenu />
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
