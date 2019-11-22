import React from 'react'
export const HomeMediaCarousel1=()=>{
    return{
       outerPadding:"xs-pt-0 xs-pb-4 pb-2 pt-0",
       contentAlignment:"left",
       theme:"",
       headline:"On-demand sessions",
       componentCTA:<a target="_blank" href="https://myignite.microsoft.com/videos" 
                aria-label="View Video library" 
                class="mt-1 pb-1 bg-brand-cta-orange  alignment c-call-to-action c-glyph" ><span>Video library</span>
                </a>,
       slides :{
            slide1 :{                              
                key:1,
                headline:"Lorem Ipsum Heading 1",                
                links:<a target="_self" className="theme-default c-call-to-action blue-bg c-glyph " aria-label="lorem ipsum" href="#">LOREM IPSUM</a>,
                vp0ImgURL:"//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Xom5?ver=b688",
                vp1ImgURL:"//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Xom5?ver=b688",        
                imgAlt:"image alt 1 ",                                     
            } ,
            slide2:{              
                key:2,
                headline:"Lorem Ipsum Heading 2",                
                links:<a target="_self" className="theme-default c-call-to-action blue-bg c-glyph " aria-label="lorem ipsum" href="#">LOREM IPSUM 2</a>,
                vp0ImgURL:"//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1XDVV?ver=e59b",
                vp1ImgURL:"//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1XDVV?ver=e59b",             
                imgAlt:"image alt 2 "
            },
            slide3:{               
                key:3,
                headline:"Lorem Ipsum Heading 3",                
                links:<a target="_self" className="theme-default c-call-to-action blue-bg c-glyph " aria-label="lorem ipsum" href="#">LOREM IPSUM 3</a>,
                vp0ImgURL:"//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Xw1a?ver=c7c0",
                vp1ImgURL:"//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Xw1a?ver=c7c0",              
                imgAlt:"image alt 3 "
            },
            slide4:{               
                key:4,
                headline:"Lorem Ipsum Heading 4",                
                links:<a target="_self" className="theme-default c-call-to-action blue-bg c-glyph " aria-label="lorem ipsum" href="#">LOREM IPSUM 4</a>,
                vp0ImgURL:"//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1XAxL?ver=6166",
                vp1ImgURL:"//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1XAxL?ver=6166",               
                imgAlt:"image alt 4"
            },
            slide5 :{                              
                key:5,
                headline:"Lorem Ipsum Heading 5",                
                links:<a target="_self" className="theme-default c-call-to-action blue-bg c-glyph " aria-label="lorem ipsum" href="#">LOREM IPSUM</a>,
                vp0ImgURL:"//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Xp69",
                vp1ImgURL:"//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Xp69",        
                imgAlt:"image alt 1 "
            } ,
            slide6:{              
                key:6,
                headline:"Lorem Ipsum Heading 6",                
                links:<a target="_self" className="theme-default c-call-to-action blue-bg c-glyph " aria-label="lorem ipsum" href="#">LOREM IPSUM 2</a>,
                vp0ImgURL:"//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1XCiv",
                vp1ImgURL:"//img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1XCiv",             
                imgAlt:"image alt 2 "
            }
       }       
    }
}
