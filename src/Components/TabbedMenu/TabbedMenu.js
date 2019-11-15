import React from 'react'
import {NavLink} from 'react-router-dom'
import './TabbedMenu.css'
const TabMenu=()=>{
    return(
        <section className="nav-menu">
            <div data-grid="container" className="tab-menu">            
                <div className="topnav">
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/en-us/speakers" >Speakers</NavLink>
                    <NavLink to="/en-us/others" >Others</NavLink>                
                </div>            
            </div>
        </section>
        
    )
}
export default TabMenu