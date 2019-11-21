import React from 'react'
import * as Comps from '../../../Components/Components'
import * as SpeakersDS from '../../DataModel/Speakers/Speakers'
import {Route} from 'react-router-dom'
const Hero= React.lazy(()=>import('../../../Components/Hero/Hero'))
const SpeakerCards=React.lazy(()=>import('../../../Components/SpeakerCards/SpeakerCards'))
const Home=() =>(
        <Route path="/en-us/ms/speakers" exact>
            <React.Suspense fallback={<div className="c-heading-3 text-center pt-3">Loading</div>}>
                <Hero compData={SpeakersDS.Hero1.Hero1()}/>
                <SpeakerCards colCount="5" customPadding="customPadding"/>
            </React.Suspense>                        
            {/* <Carousel slidesToShow='1' slidesToScroll='1'/> */}           
            <Comps.NewsFeed compData={SpeakersDS.NewsFeed1.HomeNewsFeed1()}/>           
        </Route>
)
export default Home;