import Header from "./components/header/header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <>
      <Header />
      <Carousel
        showArrows={true}
        onChange={() => {
          console.log(">>ONCHANGE", arguments);
        }}
        onClickItem={() => {
          console.log(">>ONCLICK ITEM", arguments);
        }}
        onClickThumb={() => {
          console.log(">>ONCLICK THUMB", arguments);
        }}
      >
        <div>
          <img src="images/slider_1.jpg" />
          <p className="legend">Slider 1</p>
        </div>

        <div>
          <img src="images/slider_2.jpg" />
          <p className="legend">Slider 2</p>
        </div>

        <div>
          <img src="images/slider_3.jpg" />
          <p className="legend">Slider 3</p>
        </div>
      </Carousel>

      <div className="space-medium">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo">
                  <a href="#">
                    <img src="images/nexus.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img src="images/display_img_1.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo">
                  <a href="#">
                    <img src="images/iphone.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img src="images/display_img_2.png"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo">
                  <a href="#">
                    <img src="images/samsung.png" alt=""  />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img src="images/display_img_3.png"  />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-12 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo">
                  <a href="#">
                    <img src="images/htc.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img src="images/display_img_4.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo">
                  <a href="#">
                    <img src="images/alcatel.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img src="images/display_img_5.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo">
                  <a href="#">
                    <img src="images/pixel.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img src="images/display_img_6.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo">
                  <a href="#">
                    <img src="images/vivo.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img src="images/display_img_7.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
