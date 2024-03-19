import "./App.css";
import Collection from "./Components/Browse_Our_Collection/Collection";
import DesignDream from "./Components/Design_Dream/DesignDream";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Item from "./Components/Items/Item";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";
import Strategy from "./Components/Strategy/Strategy";
import { data } from "./data";
import { Routes, Route } from "react-router-dom";
import {
  beddingBath,
  beddingBathHead,
  bottomArea,
} from "./Components/Items/data1";
import {
  furniture,
  furnitureHead,
  furniturebottomArea,
} from "./Components/Items/data2";
import {
  lighting,
  lightingHead,
  lightingbottomArea,
} from "./Components/Items/data3";
import {
  homeAccessories,
  homeAccessoriesHead,
  homeAccessoriesbottomArea,
} from "./Components/Items/data4";
import {
  wallFloor,
  wallFloorHead,
  wallFloorbottomArea,
} from "./Components/Items/data5";
import {
  bodyBeauty,
  bodyBeautyHead,
  bodyBeautybottomArea,
} from "./Components/Items/data6";
import ProductDetail from "./Components/Product_Details/ProductDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<h1>Not found</h1>} />
        <Route
          path="/Bedding & Bath"
          element={
            <>
              <Header />
              <Item
                data={beddingBath}
                dataHead={beddingBathHead}
                bottom={bottomArea}
              />
              <Menu />
              <Footer />
            </>
          }
        />

        <Route
          path="/products/:type/:index"
          element={
            <>
              <Header />
              <ProductDetail />
              <Menu />
              <Footer />
            </>
          }
        />
        <Route path="/*" element={<h1>Not found</h1>} />
        <Route
          path="/Furniture"
          element={
            <>
              <Header />
              <Item
                data={furniture}
                dataHead={furnitureHead}
                bottom={furniturebottomArea}
              />
              <Menu />
              <Footer />
            </>
          }
        />
        <Route
          path="/Lighting"
          element={
            <>
              <Header />
              <Item
                data={lighting}
                dataHead={lightingHead}
                bottom={lightingbottomArea}
              />
              <Menu />
              <Footer />
            </>
          }
        />
        <Route
          path="Home Accessories"
          element={
            <>
              <Header />
              <Item
                data={homeAccessories}
                dataHead={homeAccessoriesHead}
                bottom={homeAccessoriesbottomArea}
              />
              <Menu />
              <Footer />
            </>
          }
        />
        <Route
          path="/Wall & Floor"
          element={
            <>
              <Header />
              <Item
                data={wallFloor}
                dataHead={wallFloorHead}
                bottom={wallFloorbottomArea}
              />
              <Menu />
              <Footer />
            </>
          }
        />
        <Route
          path="/Body & Beauty"
          element={
            <>
              <Header />
              <Item
                data={bodyBeauty}
                dataHead={bodyBeautyHead}
                bottom={bodyBeautybottomArea}
              />
              <Menu />
              <Footer />
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Menu />
              <Collection />
              {data.map(
                ({ h3, src, children, direction, style, textColor }, index) => {
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
                }
              )}
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
            </>
          }
        />
      </Routes>

      {/* <Item data={beddingBath} dataHead={beddingBathHead} bottom={bottomArea} />
      <Item
        data={furniture}
        dataHead={furnitureHead}
        bottom={furniturebottomArea}
      />
      <Item
        data={lighting}
        dataHead={lightingHead}
        bottom={lightingbottomArea}
      />
      <Item
        data={homeAccessories}
        dataHead={homeAccessoriesHead}
        bottom={homeAccessoriesbottomArea}
      />
      <Item
        data={wallFloor}
        dataHead={wallFloorHead}
        bottom={wallFloorbottomArea}
      />
      <Item
        data={bodyBeauty}
        dataHead={bodyBeautyHead}
        bottom={bodyBeautybottomArea}
      /> */}
    </div>
  );
}

export default App;
