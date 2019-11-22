import React from "react";
const expandCollapseBtn = (props) =>{

    function handleClick(e){
       e.preventDefault();      
      return props.expandAllClicked();
    }
    return(
        <span className="expand-collapse-holder">
                <a onClick={handleClick}className="accordion-expandAll" aria-label={props.ariaLabelExpand} href="#" >{props.ExpandCollapseText}</a>
                {/* <a className="accordion-collapseAll" aria-label={props.ariaLabelCollapse} href="#"  >{props.CollapseText}</a> */}
            </span>
    )

}
export default expandCollapseBtn;