import React from 'react'
export const isH1orH2=(isH2,headingText,classes)=>{
let H1orH2="";

    if (isH2.toLowerCase() == "h2")
    {
        H1orH2= <h2 className={classes}>{headingText}</h2>;
    }
    else
    {
        H1orH2= <h1 className={classes}>{headingText}</h1>;
    } 
return H1orH2;   
}
export const setAttr=(selecter,attr,value)=>{
    let elements=document.querySelectorAll(selecter);         
    Array.prototype.forEach.call(elements, (el, i)=>{
        el.setAttribute(attr,value)            
    });
}
export const setMaxHeights=(selecterPath)=>{
    let selectedHeights=document.querySelectorAll(selecterPath);       
    let pheightArray = Array.from(selectedHeights).map(function (p){            
        return p.clientHeight;
    });
    const maxHeight = Math.max.apply(null, pheightArray);
    for(let i=0;i<Array.from(selectedHeights).length;i++){                 
        Array.from(selectedHeights)[i].style.height=maxHeight+"px";
    }  
}
export const checkNullOrEmpty=(content)=>{
    if(content==undefined || content == "" || content==null){
        return false
    }
    else return true
}
export const capitalize = (s) => {   
    const label=s.charAt(0).toUpperCase() + s.slice(1)   
    if (typeof label !== 'string') return ''
    return label.match(/[A-Z][a-z]+/g).join(" ")
  }
export const GetColDataval =(ColumnCount)=>
{
    let colClass = "";    
    if (ColumnCount == 1)
    {
        colClass = "col-12";
    }
    if (ColumnCount == 2)
    {
        colClass = "col-6";
    }
    else if (ColumnCount == 3)
    {
        colClass = "col-4";
    }
    else if (ColumnCount == 4)
    {
        colClass = "col-3";
    }
    else if (ColumnCount == 5)
    {
        colClass = "col-1-5";
    }
    else
    {
        colClass = "col-2";
    }
    return colClass;
}
