import React from 'react'
import './SocialShare.css'
import FollowUsLinks from '../SocialShare/Units/FollowUsLinks'
import SocialShareLinks from '../SocialShare/Units/SocialShareLinks'
import * as SocialShareData from '../SocialShare/DataSource/Global/SocialShare'

const socialData=SocialShareData.socialShareData();
const socialShare=()=>(
<section id="ce_social_share-toolbar" role="region" aria-label={socialData.ariaLabel} className={"light-background social-share-toolbar "+socialData.bgColor}>
    <div data-grid="container">
      <div data-grid="col-12 stack-1" className="pt-1">
         <div data-grid="col-6" className=" mt-1 mb-2 follow-us m-social">
            <h2 className="c-heading-5 fl pt-0 pb-0  follow-us-label no-margin">{socialData.followUs.headline}</h2>
            <ul className="follow-us-links display-inline-block pl-1 width-auto mb-0">
                <FollowUsLinks followUs={socialData.followUs}/>                                            
            </ul>
         </div>
         <div data-grid="col-6" className=" mt-1 mb-2 social-share m-social">
            <div className="dib fr xs-fl">
               <h2 className="c-heading-5 fl pt-0 pb-0  social-share-label no-margin">{socialData.socialShare.headline}</h2>
               <ul className="social-share-links display-inline-block pl-1 width-auto mb-0">
                  <SocialShareLinks share={socialData.socialShare}/>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
)
export default socialShare