import Main from './pages/main';
import Home from './pages/Home' ;

import Login from './pages/Home';

import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Admin from './pages/admins';
import User from './pages/userpage';
import Adminpage from './pages/adminpage';
import Addtask from './pages/Addtask';
import Historypage from './pages/history';
import Feedback from './pages/feedback';
//import   useState  from 'react';
  
function App(){
     return (
        
        <div>
          <Router>
               <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/userlogin" element={<Login/>}/>
                    <Route path="/adminlogin" element={<Admin/>}/>
                    <Route path="/userpage" element={<User/>}/>
                    <Route path="/adminpage" element={<Adminpage/>}/>
                    <Route path="/addtask" element={<Addtask/>}/>
                    <Route path="/history" element={<Historypage/>}/>
                    <Route path="/feedback" element={<Feedback/>}/>


               </Routes>
          </Router>



         </div>
    );
}
    
export default App



