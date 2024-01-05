import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/home";
import ProductDetails from "./pages/ProductDetails";
import Containner from "./components/Containner"; 
import Footer from "./components/Footer";
import Header from "./components/Header";

const App=()=> {
  
  return (
    <div className="App">
      <Header/>
    
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
                   
        </Routes>
        <Containner/>
         <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
