import React,{PureComponent} from 'react'
import Parser from 'html-react-parser'
import HOC from '../Helpers/HOC/hoc'
import axios from 'axios';
import TabMenu from '../TabbedMenu/TabbedMenu'
import SocialShare from '../SocialShare/SocialShare'
class Layout extends PureComponent{
    state={
        headrHtmlContent:'',
        footerHtmlContent:'',
        cssContent:'',
        jsContent:'',
        parsingState:false
    }
    getUHF =()=>{                   
        axios.get("https://uhf.microsoft.com/en-us/shell/xml/msbuild?HeaderId=msbuildheader&FooterId=msbuildfooter").then(res=>{                
            let parser = new DOMParser()
            let xmlDoc = parser.parseFromString(res.data, "text/xml");            
            var shell = xmlDoc.getElementsByTagName('shell')[0]; 
            this.setState({
                headrHtmlContent:shell.childNodes[5].innerHTML.toString(),
                footerHtmlContent:shell.childNodes[7].innerHTML.toString(),
                cssContent:shell.childNodes[1].innerHTML.toString(),
                jsContent:shell.childNodes[3].innerHTML.toString(),
                parsingState:true
            })            
        }).catch(error=>{
            console.log(error)
        })            
    }
    componentWillMount(){
        this.getUHF();
    }    
    render(){   
        let  renderCompos="" ;                                         
        if(this.state.parsingState){
            renderCompos=(
                <React.Fragment>
                    <TabMenu/>
                        {this.props.children}
                    <SocialShare/>
                </React.Fragment>                
            )
        }  
        return(            
            <HOC>                    
                {Parser(this.state.cssContent.replace("<![CDATA[", "").replace("]]>", ""))}
                <header className="App-header"> 
                    {Parser(this.state.headrHtmlContent.replace("<![CDATA[", "").replace("]]>", ""))}
                </header>
                <main className="main-content body-content" id="mainContent" tabIndex="-1">                   
                {
                    renderCompos
                }                                      
                </main>
                <footer className="clear-both">
                    {Parser(this.state.footerHtmlContent.replace("<![CDATA[", "").replace("]]>", ""))}
                </footer>                
                {Parser(this.state.jsContent.replace("<![CDATA[", "").replace("]]>", ""))}
            </HOC>
        )
    }
}
export default Layout


