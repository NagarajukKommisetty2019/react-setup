import React from 'react'
import * as Globals from '../../Helpers/Global/Global'
const picTag=(props)=>{
    //console.log(props.mw1779==undefined?"a":props.mw1779)
    const srcColl=[
        Globals.checkNullOrEmpty(props.mw1779)?
        <source key="6" srcSet={props.mw1779} media='(min-width: 1779px)'/>:null,
        Globals.checkNullOrEmpty(props.mw1400)?
        <source key="5" srcSet={props.mw1400} media='(min-width: 1400px)'/>:null,
        Globals.checkNullOrEmpty(props.mw1084)?
        <source key="4" srcSet={props.mw1084} media='(min-width: 1084px)'/>:null,
        Globals.checkNullOrEmpty(props.mw768)?
        <source key="3" srcSet={props.mw768} media='(min-width: 768px)'/>:null,
        Globals.checkNullOrEmpty(props.mw540)?
        <source key="2" srcSet={props.mw540} media='(min-width: 540px)'/>:null,
        Globals.checkNullOrEmpty(props.mw0)?
        <source key="1" srcSet={props.mw0} media='(min-width: 0px)'/>:null,
    ];    
    return(
        <picture>            
            {srcColl.concat()}
            <img data-desktop-class={props.deskClass} data-mobile-class={props.mobClass} srcSet={props.mw0==undefined?"":props.mw0} src={props.mw0} alt={props.imgAlt} className={props.classes}></img>
        </picture>
    )
}
export default picTag