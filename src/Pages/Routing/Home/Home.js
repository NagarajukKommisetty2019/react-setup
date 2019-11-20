import React from 'react'
import MultiColumn  from '../../../Components/MultiColumn/Multicol'
import NewsFeed from '../../../Components/NewsFeed/NewsFeed'
import Carousel from '../../../Components/Carousel/Slick/SCarousel'
import * as HomeDS from '../../DataModel/Home/Home'
import MCUI from '../../../Components/Carousel/MWF/UI/MCUI'
import {Route,Switch} from 'react-router-dom'
const MCarousel=React.lazy(()=>import('../../../Components/Carousel/MWF/MCarousel'))

const MultiColdataSource=HomeDS.MultiCol1.HomeMultiCol1();
const OMulticoldata=Object.keys(MultiColdataSource).map((key)=>{
    return MultiColdataSource[key]            
})
const MCarouselDataSource=HomeDS.MCarousel1.HomeMCarousel1();
const MediaCarousel1DataSource=HomeDS.MediaCarousel1.HomeMediaCarousel1();
const MediaCarousel2DataSource=HomeDS.MediaCarousel2.HomeMediaCarousel2();
const Home=() =>(  
    <Switch>      
        <Route path="/" exact>     
            <React.Suspense fallback={<div className="c-heading-3 text-center pt-3">Loading</div>}>
                <MCarousel data={MCarouselDataSource}/>
                <Carousel slidesToShow='1' slidesToScroll='1' data={MediaCarousel2DataSource}/>
                <Carousel slidesToShow='2' slidesToScroll='2' dots={true} data={MediaCarousel1DataSource}/>
                <Carousel slidesToShow='3' slidesToScroll='3' data={MediaCarousel1DataSource}/>                 
                <MultiColumn colCount='3' compData={OMulticoldata}/>
                <NewsFeed compData={HomeDS.Footer1.HomeFooter1()}/>
                <NewsFeed compData={HomeDS.NewsFeed1.HomeNewsFeed1()}/>      
            </React.Suspense>                                                        
        </Route>
        <Route path="/herocarousel1/ui" exact>
            <MCUI/>
        </Route>
    </Switch>
)
export default Home;