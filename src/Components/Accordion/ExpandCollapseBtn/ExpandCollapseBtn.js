import React from "react";
const expandCollapseBtn = (props) =>{
    return(
        <span className="expand-collapse-holder">
                <a onClick={props.expandAllClicked}className="accordion-expandAll" aria-label={props.ariaLabelExpand}  >{props.ExpandCollapseText}</a>
                {/* <a className="accordion-collapseAll" aria-label={props.ariaLabelCollapse} href="#"  >{props.CollapseText}</a> */}
            </span>
    )

}
export default expandCollapseBtn;