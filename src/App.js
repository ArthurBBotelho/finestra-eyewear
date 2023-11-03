import './index.css'
import Navbar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './router';
import Footer from './components/Footer'

function App() {
  return ( 
    <div>
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;