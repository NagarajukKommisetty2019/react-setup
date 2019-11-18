import React,{Component} from "react";
import Axios from "axios";
import SpeakerCard from "./SpeakerCard/SpeakerCard";
import ContentPlacementPopup from '../UI/ContentPopup/ContentPlacementPopup/ContentPlacementPopup'
import * as Globals from '../Helpers/Global/Global'
import "./SpeakerCards.css";
class SpeakerCards extends Component{
    state={
        speakersData : {},
        show:false,
        popupData : ""
    }  
    hidePopup =()=>{
        this.setState({
          show:false
        })
      }
    showPopupData=(linkData)=>{    
             
            this.setState({
            show:true,
            popupData:linkData
        }) 
                      
    }
    componentDidMount(){
        Axios.get('https://speaker-cards.firebaseio.com/speaker-card.json')
        .then((response)=>{                
            this.setState({
                speakersData : response.data
            });   
            Globals.setMaxHeights(".content-panel-V2 .m-content-placement-item .text-content h3");  
            Globals.setMaxHeights(".content-panel-V2 .m-content-placement-item .text-content h4");            
        }).catch((error)=>{  console.log("Err >> "+error)  });
    }
    render(){
        let componentHeadline = null;
        const speakerCardsData = {...this.state.speakersData}
        let containerClasses = "bg-grey-e6 clear-both xs-pt-4 xs-pb-4 pb-5 pt-4 content-panel-V2 top-parent-element  "
        this.props.customPadding ? (containerClasses = containerClasses+this.props.customPadding) : containerClasses = containerClasses
        let colCount=Globals.GetColDataval(this.props.colCount);     
        let speakerCards=   Object.keys(speakerCardsData).map((key,index)=>{            
            if(index == 0){               
             componentHeadline = speakerCardsData[key] ?Globals.isH1orH2("h2",speakerCardsData[key].headline,"c-heading-3 pt-0 pb-0 mt-2 text-center"):null;
            } else{   
            return(<SpeakerCard clicked={()=>this.showPopupData(speakerCardsData[key].linkData)} 
                key={"Speaker_"+speakerCardsData[key].title}
                dataColCount = {colCount} 
                title={speakerCardsData[key].title}  
                subTitle={speakerCardsData[key].subTitle}
                linkText={speakerCardsData[key].linkText}
                popupTitle={speakerCardsData[key].linkData.PopUpTitle}
                popupSubtitle={speakerCardsData[key].linkData.popUpSubtitle}
                popupDescription={speakerCardsData[key].linkData.popupDescription}
                imgData={speakerCardsData[key].imgData}              
                ></SpeakerCard>)  
            }
        });
    
        return( 
                <React.Fragment>
                    <div className={containerClasses} data-tabdesk-rowheight="False" data-tag="tagging" id="SPEAKERS_ContentpanelPopup_1" data-colperrowcount={this.props.colCount} data-iscardeffectenabled="false">
                        <div className="background-img">
                            <div data-grid="container" className="relative ">
                                {componentHeadline}
                                <div className="pl-0 pr-0 m-content-placement light-background ">
                                    <div data-grid="col-12 pad-6x" className="contentpanel dib ">
                                    {speakerCards}
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <ContentPlacementPopup displayPopupdata={this.state.popupData}  show={this.state.show} modalClosed={this.hidePopup}/>
                </React.Fragment>
                )
            }
}
export default SpeakerCards;