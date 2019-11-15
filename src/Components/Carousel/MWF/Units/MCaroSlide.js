import React from 'react'
import PicTag from '../../../Helpers/Global/PicTag'
import * as Globals from '../../../Helpers/Global/Global'
const MCaroSlide=(props)=>{  
    const data=props.slideData;
    const headline=Globals.checkNullOrEmpty(data.headline)?
        <div className="hero-heading hide-by-default show ">
            <h1 className="c-heading-3">{data.headline}</h1>
        </div>:null

    const subheadline=Globals.checkNullOrEmpty(data.subHeadline)?
    <p className="hide-by-default show c-subheading-5">
    {data.subHeadline}</p>:null

    const links=Globals.checkNullOrEmpty(data.links)?
    <div className="hero-c-links mt-2 hide-by-default show">
        {data.links}
    </div>:null
    let activeClass=props.id=="sequence-one"?"f-active":""
    return(
        <li  key={data.sequencyId}  id={data.sequencyId} data-f-theme="dark" className={"hide-by-default show "+activeClass} role="tabpanel">
            <section className="m-hero-item f-precise-click f-x-center f-y-center context-accessory theme-dark">
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
                        classes="relative simulate-background-image m-hide behind"/>                      
                        <div className="fn" data-grid="col-12 stack-2">
                            <div data-grid="col-6">
                                <div className="hero-c-bg light-background">                               
                                    {headline}
                                    {subheadline}
                                    {links} 
                                </div>
                            </div> 
                        </div>                   
            </section>
        </li>
    )
}
export default MCaroSlide