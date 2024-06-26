import { useEffect, useState } from "react";
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
import { beddingBath, beddingBathHead } from "./Components/Items/data1";
import { furniture, furnitureHead } from "./Components/Items/data2";
import { lighting, lightingHead } from "./Components/Items/data3";
import { homeAccessories, homeAccessoriesHead } from "./Components/Items/data4";
import { wallFloor, wallFloorHead } from "./Components/Items/data5";
import { bodyBeauty, bodyBeautyHead } from "./Components/Items/data6";
import ProductDetail from "./Components/Product_Details/ProductDetail";
import ProductStories from "./Components/Product_Stories/ProductStories";
import Contact from "./Components/Contact/Contact";
import ViewBag from "./Components/View_Bag/ViewBag";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Success from "./Components/Success/Success";
import Preloader from "./Components/Preloader/Preloader.jsx";

function App() {
  const [menu, setMenu] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [open, setOpen] = useState(false);
  const [SuccessMsg, setSuccessMsg] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const [loginSuccess, setLoginSuccess] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
    // console.log(loading);
  }, []);

  const toggleCardHeight = () => {
    setIsExpanded(!isExpanded);
  };
  const HideBuyWhenCartOpen = () => {
    setIsExpanded(false);
  };

  const handleOpen = (msg) => {
    setOpen(true);
    setSuccessMsg(msg);
    console.log(SuccessMsg);
  };

  const handleClose = (msg) => {
    setOpen(false);
    setSuccessMsg(msg);
  };

  function handleShow() {
    setMenu(!menu);
    setshowLogin(false);
    setShowSignup(false);
  }

  const handleSuccess = () => {
    setLoginSuccess(true);
    setshowLogin(false);
  };
  function handleLogin() {
    setshowLogin(true);
    setShowSignup(false);
    setMenu(false);
  }
  function handleSignup() {
    setShowSignup(true);
    setshowLogin(false);
    setMenu(false);
  }

  function handleContactClick() {
    setMenu(false);
    window.scrollTo(0, 0); // Scroll to the top of the page
  }

  return (
    <div className="App">
      {menu && (
        <ProductStories
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          handleContactClick={handleContactClick}
        />
      )}
      {loginSuccess && <Success handleSuccess={() => setLoginSuccess(false)} />}
      {showLogin && (
        <Login
          handleSignup={handleSignup}
          handleOpen={handleOpen}
          open={open}
          handleClose={handleClose}
          handleSuccess={handleSuccess}
        />
      )}
      {showSignup && <Signup handleLogin={handleLogin} />}
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route
            path="/products/:type/:index"
            element={
              <>
                <Header
                  textColor={"#000"}
                  // backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                />
                <ProductDetail />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />
          <Route path="/*" element={<h1>Not found</h1>} />
          <Route
            path="/Bedding & Bath"
            element={
              <>
                <Header
                  textColor={"#000"}
                  // backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                <Item
                  dataHead={beddingBathHead}
                  cardItem={beddingBath}
                  link={"/"}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />
          <Route
            path="/viewBag/Bedding & Bath"
            element={
              <>
                <Header
                  textColor={"#000"}
                  // backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                <Item
                  dataHead={beddingBathHead}
                  cardItem={beddingBath}
                  link={"/"}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />
          <Route
            path="/Furniture"
            element={
              <>
                <Header
                  textColor={"#000"}
                  // backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                <Item
                  dataHead={furnitureHead}
                  cardItem={furniture}
                  link={"/"}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />
          <Route
            path="/viewBag/Furniture"
            element={
              <>
                <Header
                  textColor={"#000"}
                  // backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                <Item
                  dataHead={furnitureHead}
                  cardItem={furniture}
                  link={"/"}
                />
                <Menu handleShow={handleShow} />
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
                  // backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                <Item dataHead={lightingHead} cardItem={lighting} link={"/"} />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />
          <Route
            path="/viewBag/Lighting"
            element={
              <>
                <Header
                  textColor={"#000"}
                  // backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                <Item dataHead={lightingHead} cardItem={lighting} link={"/"} />
                <Menu handleShow={handleShow} />
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
                  // backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                <Item
                  dataHead={homeAccessoriesHead}
                  cardItem={homeAccessories}
                  link={"/"}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />
          <Route
            path="/viewBag/Home Accessories"
            element={
              <>
                <Header
                  textColor={"#000"}
                  // backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                <Item
                  dataHead={homeAccessoriesHead}
                  cardItem={homeAccessories}
                  link={"/"}
                />
                <Menu handleShow={handleShow} />
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
                  // backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                <Item
                  dataHead={wallFloorHead}
                  cardItem={wallFloor}
                  link={"/"}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />
          <Route
            path="/viewBag/Wall & Floor"
            element={
              <>
                <Header
                  textColor={"#000"}
                  // backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                <Item
                  dataHead={wallFloorHead}
                  cardItem={wallFloor}
                  link={"/"}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />
          <Route
            path="/Body & Beauty"
            element={
              <>
                <Header
                  textColor={"#000"}
                  // backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                <Item
                  data={bodyBeauty}
                  dataHead={bodyBeautyHead}
                  cardItem={bodyBeauty}
                  link={"/"}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />
          <Route
            path="/viewBag/Body & Beauty"
            element={
              <>
                <Header
                  textColor={"#000"}
                  // backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                <Item
                  dataHead={bodyBeautyHead}
                  cardItem={bodyBeauty}
                  link={"/"}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header
                  textColor={"#000"}
                  backgroundColor={"#fff"}
                  leftHeader={"none"}
                  moooi={"start"}
                />
                <Menu handleShow={handleShow} />
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
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                <ViewBag />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <Header
                  textColor={"#fff"}
                  toggleCardHeight={toggleCardHeight}
                  HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                />
                {/* <Header textColor={backgroundColor === '#fff' ? '#000' : '#fff'} backgroundColor={backgroundColor} /> */}

                <Main />
                <Menu handleShow={handleShow} />
                <Collection />
                <div className="repeate">
                  {data.map(
                    (
                      {
                        h3,
                        src,
                        children,
                        direction,
                        style,
                        textColor,
                        navigation,
                        btn,
                        link,
                      },
                      index
                    ) => {
                      return (
                        <DesignDream
                          h3={h3}
                          src={src}
                          style={style}
                          children={children}
                          direction={direction}
                          textColor={textColor}
                          navigation={navigation}
                          btn={btn}
                          link={link}
                          key={index}
                        />
                      );
                    }
                  )}
                </div>
                <Strategy />
                <DesignDream
                  h3="Design Dream"
                  src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FWeb-Items%2FStories%2FPodcasts%2Fimage-thumb__62604__header_fullscreen_2x%2FPodcast_Design_Dreams_Mobile_Phone_Walking_In_Clouds.png&w=1080&q=80"
                  direction="row-reverse"
                  style="#4C363A"
                  btn="listen now"
                >
                  Moooi Through the Eyes of Rebelo de Andrade Architecture
                </DesignDream>
                <Footer />
              </>
            }
          />
        </Routes>
      )}{" "}
    </div>
  );
}

export default App;
