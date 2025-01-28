

import Navbar from "./components/navbar";

import SimpleSlider from "./components/Sliderjs";
import Topbar from "./components/Topbar";
import ImageGrid from "./components/ImageGrid";
import Features from "./components/Features";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <SimpleSlider />
      <ImageGrid/>
      <Features/>
      <Footer/>
      <BottomBar/>
    </>
  );
}

export default App;
