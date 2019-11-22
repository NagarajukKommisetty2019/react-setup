import React from 'react'
import './Hero.css'
import * as Globals from '../Helpers/Global/Global'
import PicTag from '../../Components/Helpers/Global/PicTag'
const Hero=(props)=>{
    const compData=props.compData;
    const classArray=[compData.contentAlignment,compData.fontTheme,compData.bgColor]
    const Classes=classArray.slice(0,classArray.length-1).join(" ")
    const overlay=compData.isOverlay==true?"gray-overlay":"";
    return(
        <section id="Home_Hero1Col_1" data-tag="tagging" className={"bg-height-auto fl left wrap f-precise-click hero1col cust-home-hero context-game c-hero f-x-left f-mask-60 f-y-center top-parent-element "+Classes }>
            <PicTag 
                mw1779={compData.vp5ImgURL}
                mw1400={compData.vp4ImgURL}
                mw1084={compData.vp3ImgURL}
                mw768={compData.vp2ImgURL}
                mw540={compData.vp1ImgURL}
                mw0={compData.vp0ImgURL}
                imgAlt={props.imgAlt}
                classes="relative simulate-background-image m-hide behind"/>           
                <div className="cust-hero-content-main">
                    <div className="cust-hero-content s-pt-4 s-pb-3 xs-pb-2 xs-pt-3">
                        <div className={"hero-text-content "+overlay }>
                        {Globals.checkNullOrEmpty(compData.heading)?
                            <h1 className="c-heading-3  pt-0">{compData.heading}</h1>:null}
                        {Globals.checkNullOrEmpty(compData.subheading)?
                            <h2 className="c-paragraph-2 pt-1">{compData.subheading}</h2>:null}
                            {compData.bodyCopy} 
                        {Globals.checkNullOrEmpty(compData.links)?                           
                            <div className="hero-link-content">
                                <div className="dib">
                                    {compData.links}
                                </div>                            
                            </div>:null}
                        </div>
                    </div>
                </div>
    </section>           
    )
}
export default Hero

  