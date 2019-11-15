import React from 'react'
import PicTag from '../../Helpers/Global/PicTag'  
import * as Globals from '../../Helpers/Global/Global'  
const eachCol=React.forwardRef((props,ref)=>{
    let classes ="content-column dib pb-1 pr-2 pl-1 " + props.colClasses 
    let overlayText=""  ;
    let imageRender="";
    if(Globals.checkNullOrEmpty(props.bottomHeadingTitle)){
        overlayText=<div className="overlay-text-container ig-brand-black-bg">
                        <h3 className="c-heading-5 fw-6 pt-0">{props.bottomHeadingTitle}</h3>
                    </div>
    }
    if(Globals.checkNullOrEmpty(props.vp0ImgURL)){
        imageRender=<div className="image-overlay-wrapper relative mb-2">
                         <PicTag 
                            mw1779={props.vp5ImgURL}
                            mw1400={props.vp4ImgURL}
                            mw1084={props.vp3ImgURL}
                            mw768={props.vp2ImgURL}
                            mw540={props.vp1ImgURL}
                            mw0={props.vp0ImgURL}
                            imgAlt={props.imgAlt}
                            classes="xs-mt-2 xs-mb-0 mb-1"/>             
                        {overlayText}
                    </div>
                   
    }
    return(
        <div className={classes} data-grid={props.colCount}>
                <div className="m-content-placement-item content-column-item pb-5 s-pb-4 xs-pb-2 mt-1 f-precise-click">
                    {imageRender}
                    {props.bodyCopy}                                                   
                </div>                 
            </div>
    )
})
export default eachCol;