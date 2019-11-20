import React,{Component} from 'react'
import './SocialShare.css'
import * as Globals from '../Helpers/Global/Global'
import * as shareData from './DataSource/socialShare.xml'
import FollowUsLinks from './Units/FollowUs/FollowUsLinks'
import SocialShareLinks from './Units/SocialShare/SocialShareLinks'
import * as SocialShareData from '../SocialShare/DataSource/Global/SocialShare'

const socialData=SocialShareData.socialShareData();
class SocialShare extends Component{
   socialShareSetting()
   {
       //share
     var pageurl = window.location.href.toLowerCase();
     let facebook = "https://www.facebook.com/dialog/feed?app_id=114189562003069&link=" + pageurl + "&redirect_uri=http%3A%2F%2Fwww.facebook.com";
     let twitter = "https://twitter.com/intent/tweet?url=" + pageurl + "&via=Microsoft";
     var meta_title = document.querySelector("meta[name='title']").getAttribute("content").replace("|", "%7C");
     meta_title = meta_title.replace(";", "%3B").replace(/ +/g, "%20");
     var meta_desc = document.querySelector("meta[name='description']").getAttribute("content").replace("|", "%7C");;
     meta_desc = meta_desc.replace(";", "%3B").replace(/ +/g, "%20");                 
     var linkedin = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageurl + "&title=" + meta_title + "&summary=" + meta_desc;      
     Globals.setAttr(".social-share-toolbar ul li a.facebook-link","href",facebook)      
     Globals.setAttr(".social-share-toolbar ul li a.twitter-link","href",twitter)      
     Globals.setAttr(".social-share-toolbar ul li a.linkedin-link","href",linkedin)      

     //follow us   
     var xmlDoc;
     var request = new XMLHttpRequest();      
     request.open('GET', shareData, true);
     request.send();
     request.onload = function() {
     if (this.status >= 200 && this.status < 400) {    
        xmlDoc= this.response;     
        console.log(xmlDoc) ;   
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlDoc,"text/xml");
        var socialNodes = xml.getElementsByTagName('social-item');
        var linkNodes = document.querySelectorAll('.follow-us-links a');         
        // Get default social nodes
        var defaultSocialNode;
        for (var i = 0; i < socialNodes.length; i++) {
              if (socialNodes[i].getElementsByTagName('social-id')[0].textContent.trim().toLowerCase() === 'ignite') {
                 defaultSocialNode = socialNodes[i];
                    break;
              }
        }
        // Get given social nodes if the page is match
        loop: {
                 for (var i = 0; i < socialNodes.length; i++) {
                    var socialNode = socialNodes[i];
                    var pageNodes = socialNode.getElementsByTagName('page');
                    for (var k = 0; k < pageNodes.length; k++) {
                       var pageNode = pageNodes[k];
                       var url = pageNode.textContent.trim();
                       var urlParts = url.split('/');
                       urlParts.splice(0, 2);
                       url = urlParts.join('/');
                       var title = pageNode.getAttribute('title').trim();
                       var currentTitle = document.title.trim();
                       var currentUrl = window.location.href;
                       if (currentTitle.indexOf(title) > -1 || currentUrl.indexOf(url) > -1) {
                             defaultSocialNode = socialNode;
                             break loop;
                       }
                    }
                 }
              }
              // Set social nodes to current social links
              for (var i = 0; i < linkNodes.length; i++) {
                    var linkNode = linkNodes[i];
                    var socialType = linkNode.getAttribute('data-info').trim().toLowerCase();
                    var socialLinkNodes = defaultSocialNode.childNodes;
                    var socialLink;
                    for (var k = 0; k < socialLinkNodes.length; k++) {
                       if (socialLinkNodes[k].tagName.toLowerCase().indexOf(socialType) > -1 || socialType.indexOf(socialLinkNodes[k].tagName.toLowerCase()) > -1) {
                             socialLink = socialLinkNodes[k].textContent.trim();
                             break;
                       }
                    }
                    if (socialLink) {
                       linkNode.setAttribute('href', socialLink);
                    }
                 }
              } else {
                    console.log("Error in data fetching")
              }
     }
     request.onerror = function() {
        console.log("Request failed");
      };
   }
   componentDidMount(){      
      this.socialShareSetting();      
   }
   render(){
      return(
         <section id="ce_social_share-toolbar" role="region" aria-label={socialData.ariaLabel} className={"light-background social-share-toolbar "+socialData.bgColor}>
               <div data-grid="container">
                  <div data-grid="col-12 stack-1" className="pt-1">
                     <div data-grid="col-6" className=" mt-1 mb-2 follow-us m-social">
                        <h2 className="c-heading-5 fl  follow-us-label no-margin">{socialData.followUs.headline}</h2>
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
   }
}
export default SocialShare