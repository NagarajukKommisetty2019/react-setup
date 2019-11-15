import React,{Component} from 'react'
import * as Globals from '../Helpers/Global/Global'
import EachCol from '../MultiColumn/Units/eachCol'
import './Multicol.css'

class MultiCol extends Component{              
    componentDidMount(){  
        //console.log("yes");
        Globals.setMaxHeights(".multi-col .content-column p"); 
        // setTimeout(()=>{            
        //     window.addEventListener("resize",()=>{
        //         Globals.setMaxHeights(".multi-col .content-column p");
        //     });
        // },500);                    
    }
    render(){                             
        const cols=[];         
        let colCount=Globals.GetColDataval(this.props.colCount)     
        for(let i=0;i<this.props.colCount;i++){            
            cols.push(
                <EachCol                    
                    key={"col"+i} 
                    colClasses={"row"+i} 
                    colCount={colCount} 
                    vp0ImgURL={this.props.compData[i+1].vp0ImgURL}
                    vp1ImgURL={this.props.compData[i+1].vp1ImgURL}
                    vp2ImgURL={this.props.compData[i+1].vp2ImgURL}
                    vp3ImgURL={this.props.compData[i+1].vp3ImgURL}
                    vp4ImgURL={this.props.compData[i+1].vp4ImgURL}
                    vp5ImgURL={this.props.compData[i+1].vp5ImgURL}
                    bottomHeadingTitle={this.props.compData[i+1].bottomHeadingTitle}
                    bodyCopy={this.props.compData[i+1].bodyCopy}
                />
            )
        }           
        return(<section  data-grid="col-12" data-col-count={this.props.colCount} data-tag="tagging" className={"multi-col display-table f-precise-click dib fl width-10 "+this.props.compData[0]} id="">
                <div data-grid="container">
                    <div className="content-columns">
                    {
                        cols.concat() 
                    }                        
                    </div>
                </div>                
             </section>              
        )
    }                                  
}    
export default MultiCol
