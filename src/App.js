import'./App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alerts1 from './components/Alerts1';
import React,{useState} from 'react';
// import { Route, Routes} from 'react-router'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App (){
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState('null');
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert('null')
      
    }, 2000);
    
  }
  const toggleMode=()=>{
    if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#222121';
        showAlert('Dark mode is on','success')
    }
    else{
        setMode('light');
        document.body.style.backgroundColor='white';

    }
  }
  return (
  <>
  {/* <Router> */}
  <Navbar tiltle="TextUtils" mode={mode} toggleMode={toggleMode}/>
  < Alerts1 alert={alert}/>
 
  <div className="container" my-3="true">
  <Textform heading="Enter The Text To Analyze" showAlert={showAlert}  mode={mode}/>

  {/* <Routes> */}
          {/* <Route path="/about" element={ <About />}/> */}
         
          
          
          {/* <Route path="/home"     element={<Textform heading="Enter The Text To Analyze" showAlert={showAlert}  mode={mode}/>}/> */}
          {/* </Routes> */}
         
     
  
  </div>
  {/* <Textform heading="Enter The Text To Analyze" showAlert={showAlert}  mode={mode} /> */}
  {/* </Router> */}


  </>
  
  );
}
export default App;