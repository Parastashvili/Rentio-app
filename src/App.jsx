import HeaderStrip from "./Components/Header/HeaderStrip";
import HeaderLogo from "./Components/Header/HeaderLogo";
import HeaderNavigation from "./Components/Header/HeaderNavigation";
import HeaderSlider from "./Components/Body/HeaderSlider";
import MostWanted from "./Components/Body/MostWanted";
import Assortment from "./Components/Body/Assortment";
import Category from "./Components/Body/Category";

function App() {
  return (
    <>
      <div style={{ position: "relative", zIndex: 5 }}>
        <HeaderStrip />
        <HeaderLogo />
      </div>
      <HeaderNavigation />
      <HeaderSlider />
      <MostWanted />
      <Assortment />
      <Category />
    </>
  );
}

export default App;
