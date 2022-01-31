import { BrowserRouter, Routes, Route } from "react-router-dom"
import Map from './Components/Map';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import  About  from './Components/About';
import Data2 from "./Components/Data2";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Data2/>}/>
        <Route path="wanted-app" element={<Data2/>}/>
        <Route path="home"  element={<Data2/>}/>
        <Route path="Field_Offices" element={<Map/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
