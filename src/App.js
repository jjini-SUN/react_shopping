//npm install react-router-dom @reduxjs/toolkit react-redux react-icons react-loader-spinner
import Header from "./components/header/header";
import Home from "./pages/home";
import Cart from "./pages/cart";
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path= '/' element = {<Home/>}/>
        <Route path= '/cart' element = {<Cart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
