import React from "react";
import "./BackDrop.css";


const backdrop =(props)=>(
    props.show === true ? <div className="Backdrop" onClick={props.clicked}></div> :null
)
export default backdrop;