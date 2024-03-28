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
import BuyItem from "./Components/Buy_Item/BuyItem";
import ProductStories from "./Components/Product_Stories/ProductStories";
import Contact from "./Components/Contact/Contact";
import { useState } from "react";
import ViewBag from "./Components/View_Bag/ViewBag";

function App() {
  const [show, setShow] = useState(false);
  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      {show ? <ProductStories /> : null}
      <Routes>
        <Route path="/*" element={<h1>Not found</h1>} />
        <Route
          path="/Bedding & Bath"
          element={
            <>
              <Header
                textColor={"#000"}
                backgroundColor={"#fff"}
                leftHeader={"none"}
                moooi={"start"}
              />
              <Item
                data={beddingBath}
                dataHead={beddingBathHead}
                bottom={bottomArea}
              />
              <Menu handleMenu={handleMenu} />
              <Footer />
            </>
          }
        />

        <Route
          path="/products/:type/:index"
          element={
            <>
              <Header
                textColor={"#000"}
                backgroundColor={"#fff"}
                leftHeader={"none"}
                moooi={"start"}
              />
              <ProductDetail />
              <Menu handleMenu={handleMenu} />
              <Footer />
            </>
          }
        />
        <Route path="/*" element={<h1>Not found</h1>} />
        <Route
          path="/Furniture"
          element={
            <>
              <Header
                textColor={"#000"}
                backgroundColor={"#fff"}
                leftHeader={"none"}
                moooi={"start"}
              />
              <Item
                data={furniture}
                dataHead={furnitureHead}
                bottom={furniturebottomArea}
              />
              <Menu handleMenu={handleMenu} />
              <Footer />
            </>
          }
        />
        <Route
          path="/Lighting"
          element={
            <>
              <Header
                textColor={"#000"}
                backgroundColor={"#fff"}
                leftHeader={"none"}
                moooi={"start"}
              />
              <Item
                data={lighting}
                dataHead={lightingHead}
                bottom={lightingbottomArea}
              />
              <Menu handleMenu={handleMenu} />
              <Footer />
            </>
          }
        />
        <Route
          path="Home Accessories"
          element={
            <>
              <Header
                textColor={"#000"}
                backgroundColor={"#fff"}
                leftHeader={"none"}
                moooi={"start"}
              />
              <Item
                data={homeAccessories}
                dataHead={homeAccessoriesHead}
                bottom={homeAccessoriesbottomArea}
              />
              <Menu handleMenu={handleMenu} />
              <Footer />
            </>
          }
        />
        <Route
          path="/Wall & Floor"
          element={
            <>
              <Header
                textColor={"#000"}
                backgroundColor={"#fff"}
                leftHeader={"none"}
                moooi={"start"}
              />
              <Item
                data={wallFloor}
                dataHead={wallFloorHead}
                bottom={wallFloorbottomArea}
              />
              <Menu handleMenu={handleMenu} />
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
              <Menu handleMenu={handleMenu} />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Menu handleMenu={handleMenu} />
              <Contact />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/viewBag"
          element={
            <>
              <Header
                textColor={"#000"}
                backgroundColor={"#fff"}
                leftHeader={"none"}
                moooi={"start"}
              />
              <ViewBag />
              <Menu handleMenu={handleMenu} />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />

              <Menu handleMenu={handleMenu} />
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
