import { useState } from "react";
import HeaderStrip from "./Components/Header/HeaderStrip";
import HeaderLogo from "./Components/Header/HeaderLogo";
import HeaderNavigation from "./Components/Header/HeaderNavigation";
import HeaderSlider from "./Components/Body/HeaderSlider";
import MostWanted from "./Components/Body/MostWanted";

function App() {
  return (
    <>
      <HeaderStrip />
      <HeaderLogo />
      <HeaderNavigation />
      <HeaderSlider />
      <MostWanted />
      <HeaderNavigation />
    </>
  );
}

export default App;
