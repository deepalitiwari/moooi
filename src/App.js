import "./App.css";
import Collection from "./Components/Browse_Our_Collection/Collection";
import DesignDream from "./Components/Design_Dream/DesignDream";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";
import Strategy from "./Components/Strategy/Strategy";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Menu />
      <Collection />
      <DesignDream
        h3="Design Dream"
        src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FApplied%2FProjects%2FArt%2520Legacy%2520Hotel%2520-%2520Lisbon%2F83011%2Fimage-thumb__83011__header_fullscreen_2x%2FArt%2520Legacy%2520hotel-8.png&w=1920&q=80"
        style="background-color: #000;"
      >
        Moooi Through the Eyes of Rebelo de Andrade Architecture
      </DesignDream>
      {/* <DesignDream
        h3="Moooi Preasents"
        src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FApplied%2FProjects%2FArt%2520Legacy%2520Hotel%2520-%2520Lisbon%2F83011%2Fimage-thumb__83011__header_fullscreen_2x%2FArt%2520Legacy%2520hotel-8.png&w=1920&q=80"
        style=""
      >
        Kissing booth by Moooi X EveryHuman
      </DesignDream> */}

      <Strategy />

      <Footer />
    </div>
  );
}

export default App;
