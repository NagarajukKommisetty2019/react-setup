import React,{Component} from "react";
import "./ContentPlacementPopup.css";
//import Aux from "../../../hoc/Aux";
import Backdrop from "../BackDrop/BackDrop";

class ContentPlacementPopup extends Component{

    shouldComponentUpdate(nextProps,nextState){    
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    
    render(){      
        return(<div>
                    <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                    <div className="ContentPlacementPopup" style={{
                        transform : this.props.show ? "translateY(-50%)":"translate(-100vh)",
                        opacity: this.props.show ? "1" :"0",
                        top:"50%"}}> 
                        <span className="closeButton" onClick={this.props.modalClosed}>X</span>
                        <p className="title">{this.props.displayPopupdata["PopUpTitle"]}</p>
                        <p className="subTitle">{this.props.displayPopupdata["popUpSubtitle"]}</p>
                        <p className="description">{this.props.displayPopupdata["popUpDescription"]}</p>
                    </div>
            </div>)
    }    
}
export default ContentPlacementPopup;