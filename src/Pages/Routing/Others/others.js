import React from 'react'
import * as Comps from '../../../Components/Components'
import Hero from '../../../Components/Hero/Hero'
import * as SpeakersDS from '../../DataModel/Speakers/Speakers'
import * as HomeDS from '../../DataModel/Home/Home'
import {Route} from 'react-router-dom'

const MultiColdataSource=SpeakersDS.MultiCol1.HomeMultiCol1();
const OMulticoldata=Object.keys(MultiColdataSource).map((key)=>{
    return MultiColdataSource[key]            
})
const Others=() =>(
        <Route path="/en-us/others" exact>
            <Hero compData={HomeDS.Hero1.Hero1()}/>            
            <Comps.MultiColumn colCount='4' compData={OMulticoldata}/>
            <Comps.NewsFeed compData={SpeakersDS.Footer1.HomeFooter1()}/>                                    
            <Comps.MultiColumn colCount='3' compData={OMulticoldata}/> 
            <Comps.NewsFeed compData={SpeakersDS.NewsFeed1.HomeNewsFeed1()}/>           
        </Route>
)
export default Others;