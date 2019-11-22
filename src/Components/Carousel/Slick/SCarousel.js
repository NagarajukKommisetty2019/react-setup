import React,{Component} from "react";
import Slider from "react-slick";
import * as Globals from '../../Helpers/Global/Global'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slides from '../Slick/Units/Slide'
import "./SCarousel.css"
class Carousel extends Component {
  render() {
   let data=this.props.data.slides;       
   const slides=[];
   const OMediaCarouselData=Object.keys(data).map((key)=>{
      return data[key];
   });
   let id=0;
   OMediaCarouselData.map((slide)=>{  
      let cSlide=<Slides contentAlignment={this.props.data.contentAlignment} key={slide.key} Id={"Home_MediaCarousel_1_"+id} slideData={slide}/>
      id++;
      slides.push(cSlide);
   })   
    var settings = {
      dots: this.props.dots,
      infinite: true,
      speed: 500,
      slidesToShow:parseInt(this.props.slidesToShow),
      slidesToScroll:parseInt(this.props.slidesToScroll)
    };
    return (
      <div id="Home_MediaCarousel_1" data-tag="tagging" class="media-carousel-copy clear-both media-carousel-enable-navigation component left bg-white light-background ">
      <div data-grid="container" className={this.props.data.outerPadding}>
      <div data-grid="col-12">
            <h2 class="c-heading-3 mt-0 pt-0 pb-1 mb-0 text-center">{this.props.data.headline}</h2>
            <div className="carousel-wrapper left pl-4 pr-4 pt-1" role="region" aria-label="carousel">
               <Slider {...settings}>
                  {slides.concat()}                    
               </Slider>
               {Globals.checkNullOrEmpty(this.props.data.componentCTA)?
               <div data-grid="col-12" class="text-center pt-3">
                  {this.props.data.componentCTA}
               </div>:null}
            </div>
         </div>
      </div>
   </div>
    );
  }
}
export default Carousel