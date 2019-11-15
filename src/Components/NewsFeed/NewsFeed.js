import React from 'react'
import './NewsFeed.css' 
import * as Globals from '../Helpers/Global/Global'
 
const NewsFeed=(props)=>{
    const data=props.compData;

    let leftColCount=data.leftMergeColCount,
        rightColCount=0;  
    if(leftColCount<=12){
        rightColCount=12-leftColCount;
    }

    let leftCopyAlign=data.leftContentTextAlign,
        rightCopyAlign=data.rightContentTextAlign     
    if(!Globals.checkNullOrEmpty(data.leftContentTextAlign)){
        leftCopyAlign="text-left"
    }    
    if(!Globals.checkNullOrEmpty(data.rightContentTextAlign)){
        rightCopyAlign="text-left"
    } 
    //console.log(Globals.checkNullOrEmpty(data.rightContentTextAlign))
    //console.log(rightCopyAlign)
    let rightContainer="",
        leftContainer="";
    if(Globals.checkNullOrEmpty(leftColCount)){ 
        leftContainer=<div className={"left-container "+leftCopyAlign} data-grid={"col-"+leftColCount}>
            {data.leftContent}
        </div>                   
    }
    //console.log((Globals.checkNullOrEmpty(leftColCount)))
    if(Globals.checkNullOrEmpty(rightColCount)){ 
        rightContainer=<div className={"right-container pl-1 xs-mt-1 xs-mb-0 "+rightCopyAlign } data-grid={"col-"+rightColCount}>
           {data.rightContent}
        </div>                    
    }

    const classes=[];
    classes.push("news-feed dib fl",data.bgColorClass,data.fontTheme,data.outerPadding);            
    const componentClasses=classes.reduce((classItem,total)=>{
        return total + " " +classItem
    },"")  

    return(<section data-tag="tagging" className={componentClasses} id="Home_Newsfeedbar_2">
                <div data-grid="container">
                    <div data-grid="col-12" className="banner-container pt-0 pb-0">
                        {leftContainer}                     
                        {rightContainer}                        
                    </div>
                </div>
            </section>
    )
}
export default NewsFeed
