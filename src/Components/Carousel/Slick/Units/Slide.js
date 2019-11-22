import React from 'react'
import PicTag from '../../../Helpers/Global/PicTag'
import * as Globals from '../../../Helpers/Global/Global'
const Slide=(props)=>{
const data=props.slideData
return(
    <div class="mediaslide show-frame hide-by-default">
        <section class="frame" id={props.Id}>
           <div class="img-content">
                <PicTag 
                    mw1779={data.vp5ImgURL}
                    mw1400={data.vp4ImgURL}
                    mw1084={data.vp3ImgURL}
                    mw768={data.vp2ImgURL}
                    mw540={data.vp1ImgURL}
                    mw0={data.vp0ImgURL}
                    imgAlt={data.imgAlt}
                    deskClass={'relative simulate-background-image m-hide behind'}
                    mobClass={'relative m-only-show behind'}
                    classes="relative"/>                       
           </div>
           <div class={"text-content pl-0 pr-1 "+props.contentAlignment}>
              {Globals.checkNullOrEmpty(data.headline)?
                <h3 class="c-heading-5 fw-6 title pt-2">{data.headline}</h3>:null}
              {Globals.checkNullOrEmpty(data.links)?
                <div class="links hide-by-default show-element">
                    <a class="c-call-to-action f-lightweight c-glyph" target="self" href="#" aria-label="Watch videos about Productivity">Watch videos</a>
                </div>:null}              
           </div>
        </section>
    </div>

)}
export default Slide;