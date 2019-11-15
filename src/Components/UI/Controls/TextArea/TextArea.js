import React from 'react'
import '../../Controls/Input/Input.css'
const Textarea =(props)=>{
return ( <div className={"form-group "+props.classes}>
         <label htmlFor={props.id}>{props.labelName}</label>         
            <textarea rows="5" onChange={props.inputChange} value={props.ivalue} className="form-control" id={props.id} placeholder={props.placeholder}/>        
         </div>)
}
export default Textarea