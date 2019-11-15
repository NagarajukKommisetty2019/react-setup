import React from 'react'
import * as MCarousel from '../DataSource/MCarousel'
import * as Globals from '../../../Helpers/Global/Global'
import Input from '../../../../Components/UI/Controls/Input/Input'
import Textarea from '../../../../Components/UI/Controls/TextArea/TextArea'
import './MCUI.css'
import { renderToString } from 'react-dom/server'

const getMCUIData=MCarousel.HomeMCarousel1();
const controls=[];
const objParentControls=[]; 
Object.keys(getMCUIData).map((key)=>{    
    let label=Globals.capitalize(key);
    if(typeof(getMCUIData[key])=="string"){
        controls.push(<Input classes="l1" key={key} type="text" id={key} placeholder="Enter Text" 
                             labelName={label} ivalue={getMCUIData[key]} inputChange={(e)=>e.target.value}/>)
    }
    else if(typeof(getMCUIData[key])=="object"){                       
        let objGroup=null;
        let objParentGroup=null;
        //controls.push(objLabel)
        Object.keys(getMCUIData[key]).map((L2Key)=>{
            const L2Obj=getMCUIData[key];
            let i =0;           
            if(typeof(L2Obj[L2Key])=="object"){                
                let L3Obj=L2Obj[L2Key];
                const l3Controls=[];
                Object.keys(L3Obj).map((L3Key)=>{                    
                    if(typeof(L3Obj[L3Key])==='string'){
                        console.log(L3Key)
                        l3Controls.push(<Input classes="l3" key={L3Key} type="text" id={L3Key} placeholder="Enter Text" 
                        labelName={Globals.capitalize(L3Key)} ivalue={L3Obj[L3Key]} inputChange={(e)=>e.target.value}/>)
                    }
                    else if(L3Key!="key"){
                        let stringfy=renderToString(L3Obj[L3Key])
                        l3Controls.push(
                            <Textarea classes="l3" key={L3Key} type="text" id={L3Key} placeholder="Enter Text" 
                            labelName={Globals.capitalize(L3Key)} ivalue={stringfy} inputChange={(e)=>e.target.value}/>
                        ); 
                    }
                }) ;
                objGroup=<div className="l2" key={L2Key}>
                            <label>{L2Key}</label>
                            {l3Controls.concat()}
                        </div>                                        
            }
            else{
                objGroup=<Input classes="l2" key={L2Key} type="text" id={L2Key} placeholder="Enter Text" 
                labelName={Globals.capitalize(L2Key)} ivalue={L2Obj[L2Key]} inputChange={(e)=>e.target.value}/>
            }
            objParentControls.push(objGroup)            
        });
        objParentGroup=<div className="l1" key={key}>
                    <label>{Globals.capitalize(key)}</label>
                    {objParentControls.concat()}
                </div>
        controls.push(objParentGroup)
    }
    
});

const MCUI=()=>{
return(
    <form>
        <div className="form-layout">
            <h1 className="c-heading-3 text-center mb-3 mt-1 pt-0">Home Page Data Layout</h1>
            {controls.concat()}
        </div>
        
    </form>
    
)
}
export default MCUI