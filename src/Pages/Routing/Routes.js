import React from 'react'
import Home from './Home/Home'
import Speakers from './Speakers/Speakers'
import Others from './Others/others'
import FAQ from './FAQ/FAQ'
const AllRoutes=()=>(
    <React.Fragment>
        <Home/>                           
        <Speakers/> 
        <Others/> 
        <FAQ/>
    </React.Fragment>    
)
export default AllRoutes
