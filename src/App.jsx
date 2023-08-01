import { useState } from "react";
import HeaderStrip from "./Components/Header/HeaderStrip";
import HeaderLogo from "./Components/Header/HeaderLogo";
import HeaderNavigation from "./Components/Header/HeaderNavigation";

function App() {
  return (
    <>
      <HeaderStrip />
      <HeaderLogo />
      <HeaderNavigation />
    </>
  );
}

export default App;
