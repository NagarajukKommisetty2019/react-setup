import React from 'react'
import MultiColumn  from '../../../Components/MultiColumn/Multicol'
import NewsFeed from '../../../Components/NewsFeed/NewsFeed'
import Carousel from '../../../Components/Carousel/Slick/SCarousel'
import MCarousel from '../../../Components/Carousel/MWF/MCarousel'
import * as HomeDS from '../../DataModel/Home/Home'
import MCUI from '../../../Components/Carousel/MWF/UI/MCUI'
import {Route,Switch} from 'react-router-dom'
const MultiColdataSource=HomeDS.MultiCol1.HomeMultiCol1();
const OMulticoldata=Object.keys(MultiColdataSource).map((key)=>{
    return MultiColdataSource[key]            
})
const MCarouselDataSource=HomeDS.MCarousel1.HomeMCarousel1();

const Home=() =>(  
    <Switch>      
        <Route path="/" exact>             
            <MCarousel data={MCarouselDataSource}/>
            <Carousel slidesToShow='1' slidesToScroll='1'/>
            <Carousel slidesToShow='3' slidesToScroll='3'/> 
            <Carousel slidesToShow='2' slidesToScroll='2' dots={true}/>
            <MultiColumn colCount='3' compData={OMulticoldata}/>
            <NewsFeed compData={HomeDS.Footer1.HomeFooter1()}/>
            <NewsFeed compData={HomeDS.NewsFeed1.HomeNewsFeed1()}/>                       
        </Route>
        <Route path="/ui" exact>
            <MCUI/>
        </Route>
    </Switch>
)
export default Home;