import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About'
import TextForm from './components/TextForm';
import React, {useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

// import About from './components/About';
// let x ="TextUtilsAbhinav"

function App() {
  const [mode , setMode]= useState('light');
  const [alert , setAlert]= useState(null);
  const showAlert = (massage, type)=>{
    setAlert({
        msg : massage,
        type : type
    })
    setTimeout(()=>{
      setAlert(null)
    } , 1500)
  }
 
  const toggleMode = ()=>{
    if (mode === 'light') {
      
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert('Dark mode is Enabled' , 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode is Enabled' , 'success')
    }
  }

  return (
  <>
  <Router>
<Navbar title="TextUtils" aboutText="About Us " mode = {mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
    <Switch> 
           <Route path="/about">
            <About mode = {mode} />
          </Route>
         
          <Route path="/">
            <TextForm heading="Enter the text to analyze below" mode = {mode} showAlert={showAlert} />
           </Route>
        </Switch> 
  
 {/* <Navbar title={x} aboutText="About Us "/> */}
 {/* <About/> */}
 </Router>
  </>
  );
}

export default App;
