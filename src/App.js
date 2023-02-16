import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Home";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Portofolio from "./pages/Portofolio";
import Services from "./pages/Services";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/testreact' element={<Accueil/>}/>
        <Route path='/Apropos' element={<Apropos/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Portofolio' element={<Portofolio/>}/>
        <Route path='/Services' element={<Services/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
