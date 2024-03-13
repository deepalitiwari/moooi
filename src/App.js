import "./App.css";
import Collection from "./Components/Browse_Our_Collection/Collection";
import DesignDream from "./Components/Design_Dream/DesignDream";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";
import Strategy from "./Components/Strategy/Strategy";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Menu />
      <Collection />
      {data.map(({ h3, src, children, direction, style, textColor }, index) => {
        return (
          <DesignDream
            h3={h3}
            src={src}
            style={style}
            children={children}
            direction={direction}
            textColor={textColor}
            key={index}
          />
        );
      })}
      <Strategy />
      <DesignDream
        h3="Design Dream"
        src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FWeb-Items%2FStories%2FPodcasts%2Fimage-thumb__62604__header_fullscreen_2x%2FPodcast_Design_Dreams_Mobile_Phone_Walking_In_Clouds.png&w=1080&q=80"
        direction="row-reverse"
        style="#4C363A;
    
        "
      >
        Moooi Through the Eyes of Rebelo de Andrade Architecture
      </DesignDream>

      <Footer />
    </div>
  );
}

export default App;
