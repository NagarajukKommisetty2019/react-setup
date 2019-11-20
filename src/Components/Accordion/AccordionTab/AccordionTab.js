import React from "react";
const AccordionTab =(props)=>{
    let showAccordionPanelClass = "accordionpanel  ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" ;
    showAccordionPanelClass= props.currentState=="expand" ?showAccordionPanelClass= showAccordionPanelClass+ " db" : showAccordionPanelClass;
   return(
    <div>
        <button id="" 
            className="accordion-header ui-accordion-header ui-helper-reset ui-state-default bg-white bg-right-arrow-white" 
            data-no-tag="1"            
            aria-controls="@divID" 
            role="button" 
            onClick={props.clicked}
            aria-expanded={props.ariaExpanded}>
            <span className="c-paragraph-3 x-hidden-focus">{props.accordionTabHeading}</span>
        </button>
        <div className={showAccordionPanelClass} id="">
            <div className="left-content">
                <p>{props.accordionContent}</p>
            </div>
        </div>
    </div>
   ) 
}
export default AccordionTab;