//import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes ,
  Redirect,
  Navigate ,
} from "react-router-dom";



import LoginPage from './page/LoginPage';

import StudentCheck from './page/StudentCheck';

import Menu from './page/Menu';

import Index from './page/index'



function App() {
  return (
  <>

    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
      <Routes>

        {/* This route is for about component 
        with exact path "/about", in component 
        props we passes the imported component*/}
        <Route path="/" element={<LoginPage/>}/>

        <Route path="/index" element = {<Index/>}></Route>

        <Route path="/Studentcheck" element={<StudentCheck/>} />
          
        <Route path="/menu" element={<Menu/>} />
        {/* If any route mismatches the upper 
        route endpoints then, redirect triggers 
        and redirects app to home component with to="/" */}
        <Route path="*" element = {<LoginPage/>}></Route>
      </Routes>
    </Router>
    
  </>
  );

}

export default App;
