import React from 'react'
import './Input.css'
const Input =(props)=>{
return ( <div className={"form-group "+props.classes}>
         <label htmlFor={props.id}>{props.labelName}</label>
            <input type={props.type} onChange={props.inputChange} value={props.ivalue} className="form-control" id={props.id} placeholder={props.placeholder}/>        
         </div>)
}
export default Input