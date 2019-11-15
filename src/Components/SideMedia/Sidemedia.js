import React,{Component} from 'react';
import * as Globals from '../Helpers/Global/Global';
import EachCount from '../SideMedia/Count/eachCount';
import './SideMedia.css';
class SideMedia extends Component{   
constructor(props){
super(props); 
this.paraGraphs= React.createRef();      
}        
render(){                    
const cols=[];         
let colCount=Globals.GetColDataval(this.props.colCount)     
for(let i=0;i<this.props.colCount;i++){            
cols.push(
<EachCount 
   ref={this.paraGraphs}
   key={"col"+i} 
   colClasses={"media"+i} 
   colCount={colCount} 
   vp0ImgURL={this.props.compData[i].vp0ImgURL}
   vp1ImgURL={this.props.compData[i].vp1ImgURL}
   vp2ImgURL={this.props.compData[i].vp2ImgURL}
   vp3ImgURL={this.props.compData[i].vp3ImgURL}
   vp4ImgURL={this.props.compData[i].vp4ImgURL}
   vp5ImgURL={this.props.compData[i].vp5ImgURL}
   bottomHeadingTitle={this.props.compData[i].bottomHeadingTitle}
   bodyCopy={this.props.compData[i].bodyCopy}
   />
)
}           
return(
<section  data-grid="col-12" data-tag="tagging" className="side-media-with-copy pb-4 pt-2" id="">
   <div data-grid="container">
      <div className="side-media-containers">
         {
         cols.concat() 
         }                        
      </div>
   </div>
</section>
)
}                                  
}    
export default SideMedia;