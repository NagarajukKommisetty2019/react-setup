import React,{Component} from "react";
import Slider from "react-slick";
import PicTag from '../../Helpers/Global/PicTag'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SCarousel.css"
class Carousel extends Component {
  render() {
    var settings = {
      dots: this.props.dots,
      infinite: true,
      speed: 500,
      slidesToShow:parseInt(this.props.slidesToShow),
      slidesToScroll:parseInt(this.props.slidesToScroll)
    };
    return (
        <div className="slickSlider clear-both" data-grid="container">
            <Slider {...settings}>
                <div>
                <h3>1</h3>
                  {/* <PicTag 
                  mw1779={"http://fpoimg.com/2000x500?text=Slide1&bg_color=050000"}
                  mw1400={"http://fpoimg.com/1779x500?text=Slide1&bg_color=050000"}
                  mw1084={"http://fpoimg.com/1400x500?text=Slide1&bg_color=050000"}
                  mw768={"http://fpoimg.com/1084x500?text=Slide1&bg_color=050000"}
                  mw540={"http://fpoimg.com/768x500?text=Slide1&bg_color=050000"}
                  mw0={"http://fpoimg.com/540x500?text=Slide1&bg_color=050000"}
                  imgAlt={"Carousel 1"}
                  classes="relative simulate-background-image m-hide behind"/> */}
                </div>
                <div>
                <h3>2</h3>
                {/* <PicTag 
                  mw1779={"http://fpoimg.com/2000x500?text=Slide2&bg_color=050000"}
                  mw1400={"http://fpoimg.com/1779x500?text=Slide2&bg_color=050000"}
                  mw1084={"http://fpoimg.com/1400x500?text=Slide2&bg_color=050000"}
                  mw768={"http://fpoimg.com/1084x500?text=Slide2&bg_color=050000"}
                  mw540={"http://fpoimg.com/768x500?text=Slide2&bg_color=050000"}
                  mw0={"http://fpoimg.com/540x500?text=Slide2&bg_color=050000"}
                  imgAlt={"Carousel 2"}
                  classes="relative simulate-background-image m-hide behind"/> */}
                </div>
                <div>
                <h3>3</h3>
                {/* <PicTag 
                  mw1779={"http://fpoimg.com/2000x500?text=Slide3&bg_color=050000"}
                  mw1400={"http://fpoimg.com/1779x500?text=Slide3&bg_color=050000"}
                  mw1084={"http://fpoimg.com/1400x500?text=Slide3&bg_color=050000"}
                  mw768={"http://fpoimg.com/1084x500?text=Slide3&bg_color=050000"}
                  mw540={"http://fpoimg.com/768x500?text=Slide3&bg_color=050000"}
                  mw0={"http://fpoimg.com/540x500?text=Slide3&bg_color=050000"}
                  imgAlt={"Carousel 3"}
                  classes="relative simulate-background-image m-hide behind"/> */}
                </div>
                <div>
                <h3>4</h3>
                {/* <PicTag 
                  mw1779={"http://fpoimg.com/2000x500?text=Slide4&bg_color=050000"}
                  mw1400={"http://fpoimg.com/1779x500?text=Slide4&bg_color=050000"}
                  mw1084={"http://fpoimg.com/1400x500?text=Slide4&bg_color=050000"}
                  mw768={"http://fpoimg.com/1084x500?text=Slide4&bg_color=050000"}
                  mw540={"http://fpoimg.com/768x500?text=Slide4&bg_color=050000"}
                  mw0={"http://fpoimg.com/540x500?text=Slide4&bg_color=050000"}
                  imgAlt={"Carousel 4"}
                  classes="relative simulate-background-image m-hide behind"/> */}
                </div>
                <div>
                <h3>5</h3>
                {/* <PicTag 
                  mw1779={"http://fpoimg.com/2000x500?text=Slide5&bg_color=050000"}
                  mw1400={"http://fpoimg.com/1779x500?text=Slide5&bg_color=050000"}
                  mw1084={"http://fpoimg.com/1400x500?text=Slide5&bg_color=050000"}
                  mw768={"http://fpoimg.com/1084x500?text=Slide5&bg_color=050000"}
                  mw540={"http://fpoimg.com/768x500?text=Slide5&bg_color=050000"}
                  mw0={"http://fpoimg.com/540x500?text=Slide5&bg_color=050000"}
                  imgAlt={"Carousel 5"}
                  classes="relative simulate-background-image m-hide behind"/> */}
                </div>
                <div>
                <h3>6</h3>
                {/* <PicTag 
                  mw1779={"http://fpoimg.com/2000x500?text=Slide6&bg_color=050000"}
                  mw1400={"http://fpoimg.com/1779x500?text=Slide6&bg_color=050000"}
                  mw1084={"http://fpoimg.com/1400x500?text=Slide6&bg_color=050000"}
                  mw768={"http://fpoimg.com/1084x500?text=Slide6&bg_color=050000"}
                  mw540={"http://fpoimg.com/768x500?text=Slide6&bg_color=050000"}
                  mw0={"http://fpoimg.com/540x500?text=Slide6&bg_color=050000"}
                  imgAlt={"Carousel 6"}
                  classes="relative simulate-background-image m-hide behind"/> */}
                </div>
            </Slider>
        </div>
      
    );
  }
}
export default Carousel