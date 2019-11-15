import React,{Component} from 'react';
import Layout from '../Components/Layout/Layout'
import AllRoutes from '../Pages/Routing/Routes'
import axios from 'axios';
class App extends Component {    
  render(){         
    return (      
      <div className="App">          
          <Layout>
            <AllRoutes/>
          </Layout>                                              
      </div>
    );  
  }                 
}
export default App;
