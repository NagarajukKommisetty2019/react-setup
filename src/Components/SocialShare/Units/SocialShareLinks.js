import React from 'react'
const shareItems=[];
const shareLinks=[];
const shareUsLinks=(props)=>{  
    Object.keys(props.share).map((key)=>{
        if(key=="facebook" || key=="twitter" || key=="linkedin"){
            shareItems.push(props.share[key]);
        }       
     });    
     let i=0;
     shareItems.map((item)=>{
        shareLinks.push(
            <li key={item.dataInfo} className="display-inline-block mr-1">
                <a target="_blank" className="facebook-link" title={item.ariaLabel} aria-label={item.ariaLabel} data-info={item.dataInfo} href="">
                    <picture>
                        <source srcSet={item.socialImageURL} media="(min-width:0)"></source>
                        <img srcSet={item.socialImageURL} alt={item.socialImageAlt} src={item.socialImageURL} />
                    </picture>
                </a>
            </li>
        )
    })
    return shareLinks.concat()
}
    
export default shareUsLinks