import React from 'react'
import * as Comps from '../../../Components/Components'
import Hero from '../../../Components/Hero/Hero'
import * as SpeakersDS from '../../DataModel/Speakers/Speakers'
import * as OthersDS from '../../DataModel/Others/Others'
import * as HomeDS from '../../DataModel/Home/Home'
import {Route} from 'react-router-dom'
const AccordionData = OthersDS.AccordionOthersDS1.AccordionOthersDS();
const Others=() =>(
        <Route path="/en-us/ms/faq" exact>
            <Hero compData={OthersDS.Hero1.Hero1()}/>    
            <Comps.Accordion compData={AccordionData}  />                      
            <Comps.NewsFeed compData={SpeakersDS.Footer1.HomeFooter1()}/>                                            
            <Comps.NewsFeed compData={SpeakersDS.NewsFeed1.HomeNewsFeed1()}/>               
        </Route>
)
export default Others;