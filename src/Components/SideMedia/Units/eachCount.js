import React from 'react'
import PicTag from '../../Helpers/Global/PicTag'    

const eachCount=React.forwardRef((props,ref)=>{
    let classes ="content-column " + props.colClasses    
    return(
        <div className={classes}>
           <div className="image-media">
                    <div className="image-overlay-wrapper relative">
                        <PicTag 
                        mw1779={props.vp5ImgURL}
                        mw1400={props.vp4ImgURL}
                        mw1084={props.vp3ImgURL}
                        mw768={props.vp2ImgURL}
                        mw540={props.vp1ImgURL}
                        mw0={props.vp0ImgURL}
                        imgAlt={props.imgAlt}
                        classes="xs-mt-2 xs-mb-0 mb-1"/>
                    </div>                                
                </div>  
                <div className="content-area">
                    <div className="overlay-text-container">
                        <h3 className="c-heading-3 fw-6 xs-pt-2 pb-2">{props.bottomHeadingTitle}</h3>
                        <p ref={ref} className="c-paragraph-3 s-pb-2 m-pb-2 pt-0">{props.bodyCopy}</p>
                    </div> 
                </div>
            </div>
    )
})

export default eachCount;
