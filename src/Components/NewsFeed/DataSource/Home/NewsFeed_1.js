import React from 'react'
export const HomeNewsFeed1=()=>{
    return{  
        bgColorClass:"ig-brand-black-bg",
        fontTheme : "dark-background",
        outerPadding:"pt-3 pb-3",
        leftMergeColCount:8,
        leftContentTextAlign:'text-left',
        leftContent:<h2 className='c-heading-4 pt-0'>        
        Join us online to livestream keynotes, watch selected sessions on-demand, and more.</h2>,
        rightContentTextAlign:'text-right',        
        rightContent:<a target="_blank"  
        href="https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE3TlM8" 
        aria-label="Click here to save the date to your calendar" 
        className="bg-brand-cta-color c-call-to-action c-glyph">Save the date</a>
    }
}
