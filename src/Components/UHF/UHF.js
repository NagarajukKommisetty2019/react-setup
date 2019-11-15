import React,{Component} from 'react';
import redux from 'redux';

class UHF extends Component{
    render(){
        
    }
}

const mapStateToprops=state=>{
    return{
        Uheader:state.header,
        Ufooter:state.footer,
        Ucss:state.css,
        Uscript:state.script
    }
}
export default UHF;