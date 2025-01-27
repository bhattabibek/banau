import Slider from "react-slick";

import Navbar from "./components/navbar";

import SimpleSlider from "./components/Sliderjs";
import Topbar from "./components/Topbar";
import ImageGrid from "./components/ImageGrid";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <SimpleSlider />
      <ImageGrid/>
      <Features/>
    </>
  );
}

export default App;
