import React from 'react'
const followItems=[];
const followLinks=[];
const followUsLinks=(props)=>{  
    Object.keys(props.followUs).map((key)=>{
        if(key=="facebook" || key=="twitter" || key=="linkedin"){
           followItems.push(props.followUs[key]);
        }       
     });    
     //console.log(followItems)
     let i=0;
     followItems.map((item)=>{
         i++;
        followLinks.push(<li key={i} className="display-inline-block mr-1">
                        <a target="_blank" className="mscom-link facebook-follow-link" title={item.ariaLabel} aria-label={item.ariaLabel} data-info={item.dataInfo} href="">
                            <picture>
                                <source srcSet={item.socialImageURL} media="(min-width:0)"></source>
                                <img srcSet={item.socialImageURL} alt={item.socialImageAlt} src={item.socialImageURL} />
                            </picture>
                        </a>
                    </li>)
    })
    //console.log(followLinks)
    return followLinks.concat()
}
export default followUsLinks;