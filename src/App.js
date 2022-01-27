import { BrowserRouter, Routes, Route } from "react-router-dom"
import Map from './Components/Map';
import './App.css';
import Data from './Components/Data';
import Header from './Components/Header';
import Footer from './Components/Footer';
import  About  from './Components/About';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Data/>}/>
        <Route path="home" element={<Data/>}/>
        <Route path="Field_Offices" element={<Map/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
