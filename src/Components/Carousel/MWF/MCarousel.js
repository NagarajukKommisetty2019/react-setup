import React,{Component} from 'react'
import './MCarousel.css'
import loadjs from 'loadjs'
import MCaroSlide from '../MWF/Units/MCaroSlide'
class MWFCarousel extends Component{      
   componentWillMount(){
      loadjs("//mwf-service.akamaized.net/mwf/js/bundle/1.55.0/mwf-auto-init-main.var.min.js")
   }
   render(){    
      let data=this.props.data.slides;       
      const slides=[];
      const OMCarouselData=Object.keys(data).map((key)=>{
         return data[key];
      });
      OMCarouselData.map((slide)=>{  
         let cSlide=<MCaroSlide key={slide.key} slideData={slide}/>
         slides.push(cSlide);
      })          
      return(<div className={"mwf-hero-carousel " +this.props.data.outerPadding} id="SQL_MWF_HeroCarousel" data-tag="tagging">       
   <div className="m-hero">
      <div data-show-single-slide="" className="c-carousel f-multi-slide f-auto-play hide-by-default show" data-js-interval="2000">
         <div className="c-group">
            <div className="c-sequence-indicator" role="tablist">
               <button className="hide-by-default show" role="tab" aria-selected="true" aria-label="Sequence indicator one" aria-controls="sequence-one" title="Sequence indicator one"></button>
               <button className="hide-by-default show" role="tab" aria-selected="false" aria-label="Sequence indicator two" aria-controls="sequence-two" title="Sequence indicator two"></button>
               <button className="hide-by-default show" role="tab" aria-selected="false" aria-label="Sequence indicator three" aria-controls="sequence-three" title="Sequence indicator three"></button>
               <button className="hide-by-default show" role="tab" aria-selected="false" aria-label="Sequence indicator four" aria-controls="sequence-four" title="Sequence indicator four"></button>               
            </div>
            <button className="c-action-toggle c-glyph glyph-play f-toggle" data-toggled-label="Pause" data-toggled-glyph="glyph-pause" aria-label="Play"></button>
         </div>
         <button className="c-flipper f-previous" aria-hidden="true" tabIndex="-1" title="previous"></button>
         <button className="c-flipper f-next" aria-hidden="true" tabIndex="-1" title="next"></button>
         <div className="c-carousel-p  height-590" data-main-headline-font="c-heading-3" data-body-text-font="c-subheading-5">
            <ul>
               {
                  slides.concat()               
               }               
            </ul>
         </div>
      </div>
                  {/* <div className="hero-single-slide-item hide-by-default   height-590">
                     <section className="m-hero-item  f-y-center f-precise-click context-game hide-by-default single-hero-item show f-x-center theme-dark">
                        <picture>
                           <source className="hide-by-default show-element" srcSet="" media="(min-width:1779px)" />
                           <source className="hide-by-default show-element" srcSet="" media="(min-width:1400px)" />
                           <source className="hide-by-default show-element" srcSet="" media="(min-width:1084px)" />
                           <source className="hide-by-default show-element" srcSet="" media="(min-width:768px)" />
                           <source className="hide-by-default show-element" srcSet="//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EltZ" media="(min-width:540px)" />
                           <source className="hide-by-default show-element" srcSet="//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Elu1" media="(min-width:0)" />
                           <img srcSet="//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EltZ" className="relative simulate-background-image m-hide behind" data-desktop-className="relative simulate-background-image m-hide behind" alt="" src="//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1EltZ" data-mobile-className="relative m-only-show behind" />
                        </picture>
                        <div className="fn" data-grid="col-12 stack-2">
                           <div data-grid="col-6">
                              <div className="hero-c-bg light-background">
                                 <div className="hero-heading hide-by-default show ">
                                    <h1 className="c-heading-3">Unleash the power in your data</h1>
                                 </div>
                                 <p className="hide-by-default show c-subheading-5">Reimagine the realm of possibility. Microsoft data platform solutions release the potential hidden in your data—whether it's on-premises, in the cloud, or at the edge—and reveal insights and opportunities to transform your business.</p>
                                 <div className="hero-c-links mt-2 hide-by-default show"><a target="_self" className="mscom-link theme-default c-call-to-action blue-bg c-glyph open-popup-video" data-player-type="oneplayer" data-video-title="Microsoft Data Platform" data-video-url="RE1T469" aria-label="Watch a video about SQL Server 2016 R Services" href="">Watch now</a></div>
                              </div>
                              </div> 
                           </div>          
                     </section>
                  </div> */}
            </div>
         </div>
      )
   }
}
export default MWFCarousel;