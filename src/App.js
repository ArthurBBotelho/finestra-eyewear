import './index.css'
import Navbar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './router';
import Footer from './components/Footer'
import CartProvider from './context/CartContext';

function App() {
  return ( 
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Router />
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;