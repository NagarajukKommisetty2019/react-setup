import React ,{Component} from "react";
import * as Globals from '../Helpers/Global/Global';
import ExpandCollapseBtn from "../Accordion/ExpandCollapseBtn/ExpandCollapseBtn";
import AccordionTab from "../Accordion/AccordionTab/AccordionTab";
import "../Accordion/Accordion.css";

class Accordion extends Component{
    state={
        componentData :  {},
        expandCollapseAllText : "expand All"
    }
    componentDidMount(){
        this.setState({
            componentData:this.props.compData
        })
    }
    showHideCurrentTab(accordionTabsData,index){      
        Object.values(accordionTabsData)[index].currentState=="collapse"?(Object.values(accordionTabsData)[index].currentState="expand"):Object.values(accordionTabsData)[index].currentState="collapse"
        Object.values(accordionTabsData)[index].currentState=="collapse"?this.state.expandCollapseAllText="expand All":this.state.expandCollapseAllText=this.state.expandCollapseAllText
        this.setState({
            componentData:accordionTabsData
        });  
    }
    showHideAllAccrodiontabs = (accordionTabsData)=>{

        let currentExpCollText = this.state.expandCollapseAllText;
        let newTabState = "";
        if(currentExpCollText == "expand All"){
            newTabState = "expand"          
           Object.keys(accordionTabsData).map((key,index)=>{
                
            if (index>0)
            {            
                    Object.values(accordionTabsData)[index].currentState = newTabState               
            }
        })
            currentExpCollText = "collapse All"
        }
        else{
            newTabState = "collapse"       
            Object.keys(accordionTabsData).map((key,index)=>{                
                if (index>0)
                {                
                    Object.values(accordionTabsData)[index].currentState = newTabState                   
                }
            })
            currentExpCollText = "expand All"
        }       
        this.setState({
                expandCollapseAllText : currentExpCollText,
                componentData : accordionTabsData
        });
    }
        
    render(){
    let heading = null;
    let accordionTabsData = {...this.state.componentData}
    let accordionTabs = Object.keys(accordionTabsData).map((key,index)=>{
        if(index==0)
        {        
            heading = Globals.isH1orH2("h2",accordionTabsData[key],"c-heading-3 pt-0 pb-0 mb-3 text-left");            
        }
    else{
       return( <AccordionTab
        key={"AccordionTab_"+index}
        accordionTabHeading={accordionTabsData[key].tabHeading}
        accordionContent={accordionTabsData[key].tabContent} 
        clicked={()=>this.showHideCurrentTab(accordionTabsData,index)}
        currentState = {accordionTabsData[key].currentState} 
        ariaExpanded = {accordionTabsData[key].currentState=="collapse"?"false":"true"} 
        />)
    }
});
    return(<section className="accordion clear-both @accordwithDesc @Model.themeClass @Model.bgColor @Model.sectionpaddingClass top-parent-element" data-grid="container" id="@Model.componentId" data-tag="tagging">
    <div className="accordion-container pb-4 ">
        <div className="xs-col-24-24 s-col-24-24 pl-0 accordion-headline-bar no-padding">    
        <ExpandCollapseBtn ExpandCollapseText={this.state.expandCollapseAllText} 
                           ariaLabel={"Click to "+this.state.expandCollapseAllText}
                           expandAllClicked={()=>{this.showHideAllAccrodiontabs(this.state.componentData)}} />
            <div className ="headline-holder">
            
                {heading}
              
            </div>  
       </div>
        <div className="accordion-main-panel xs-col-24-24 s-col-24-24 pl-0 no-padding">          
           {accordionTabs}
        </div>
        {/* if (Model.footnotes != "")
        { */}
            <div className="accordion-foot-notes xs-col-24-24 s-col-24-24 pb-1">
        <p className="c-paragraph-3" style={{display: "none"}}></p>
            </div>
        {/* } */}

    </div>
</section>
    )
    
    }
    
}
    

export default Accordion;