
import './App.css';
//import Footer component
import Footer from "./components/Footer";
// import Header component
import Header from "./components/Header";
import Home from './components/Home/Home';
import Account from './components/Account';
import Vertical from './components/Vertical';
import Roles from './components/Roles';
import Location from './components/Location';
import BillingStatus from './components/BillingStatus';
import Project from './components/Project';
import Resource from './components/Resource';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
  

      <div>
        
        <Router>
        <Home></Home>
        <Routes> 
          <Route path="/vertical" element={<Vertical/>}></Route>
          <Route path="/roles" element={<Roles/>}></Route>
          <Route path="/location" element={<Location/>}></Route>
          <Route path="/billingstatus" element={<BillingStatus/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path="/accounts" element={<Account/>}></Route>
          <Route path="/resource" element={<Resource/>}></Route>
        </Routes>  
    </Router>
      
      </div>
 
  )
}
export default App;
