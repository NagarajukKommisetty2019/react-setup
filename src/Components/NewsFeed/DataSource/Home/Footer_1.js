import React from 'react'
export const HomeFooter1=()=>{
    return{  
        bgColorClass:"bg-white",
        fontTheme : "light-background",
        outerPadding:"pt-3 pb-3",
        leftMergeColCount:12,
        leftContentTextAlign:'text-center',
        leftContent:<div className="description width-10 dib fl pt-0 pb-0">
        <h3 className="c-heading-3 pt-1 center-text-wid-50">
            A conference accessible to all</h3>
        <p className="pt-0 c-paragraph-3 center-text-wid-50 fw-4">
            Diversity and inclusion are core elements of the Microsoft 
            mission to empower every person and every organization on the 
            planet to achieve more. In support of that commitment, 
            Microsoft Ignite is proud to host events that are accessible 
            to everyone.</p> 
        <a className="ig-link-blue-acc c-call-to-action f-lightweight c-glyph" 
        aria-label="Click to read more about how Microsoft makes events accessible for all people" 
        href="https://www.microsoft.com/en-us/ignite/accessibility"><span>Learn more about accessibility</span></a>
        </div>,
        rightContentTextAlign:' ',        
        rightContent:""
    }
}
