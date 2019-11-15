import React from "react";
import PicTag from "../../Helpers/Global/PicTag";
import "./SpeakerCard.css";
const SpeakerCard = (props)=>{
    let imgData =  props.imgData;
  //  console.log(imgData.imgMin1799)
    return(
    <div data-grid={props.dataColCount} className="contentpanel-div row1 mrow1" data-index="1" data-orderposition="1">
        <div className="m-content-placement-item f-size-medium f-precise-click ">
            <div className="relative width-10 height-10 contentpanel-content bg-white ">
                <PicTag mw1779={imgData.imgMin1799} 
                        mw1400={imgData.imgMin1399} 
                        mw1084 ={imgData.imgMin1084} 
                        mw768={imgData.imgMin768} 
                        mw540={imgData.imgMin540} 
                        mw0={imgData.imgMin0}> 
                </PicTag>
                <div className="text-content pl-1 pr-1 pb-0 xs-pb-0 pt-1">
                    <h3 className="c-heading-5 fw-6 pt-0 pb-0 content-title" >{props.title}</h3>
                    <h4 className="c-paragraph-3 pt-1 pb-0 content-subtitle" >{props.subTitle} </h4>
                    <a  onClick={props.clicked} href="#" className="c-call-to-action f-lightweight c-glyph open-speaker-popup" 
                        ><span>{props.linkText}</span> 
                    </a>
                </div>
            </div>
        </div>
    </div>  )
}
export default SpeakerCard; 