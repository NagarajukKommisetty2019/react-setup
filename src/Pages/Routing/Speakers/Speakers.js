import React from 'react'
import * as Comps from '../../../Components/Components'
// import Carousel from '../../../Components/Carousel/Slick/SCarousel'
//import SpeakerCards from '../../../Components/SpeakerCards/SpeakerCards'
import Hero from '../../../Components/Hero/Hero'
import * as SpeakersDS from '../../DataModel/Speakers/Speakers'
import {Route} from 'react-router-dom'

const MultiColdataSource=SpeakersDS.MultiCol1.HomeMultiCol1();
const OMulticoldata=Object.keys(MultiColdataSource).map((key)=>{
    return MultiColdataSource[key]            
})
const Home=() =>(
        <Route path="/en-us/speakers" exact>
            <Hero compData={SpeakersDS.Hero1.Hero1()}/>
            <Comps.SpeakerCards colCount="5" customPadding="customPadding"/>
            {/* <Carousel slidesToShow='1' slidesToScroll='1'/> */}           
            <Comps.NewsFeed compData={SpeakersDS.NewsFeed1.HomeNewsFeed1()}/>           
        </Route>
)
export default Home;