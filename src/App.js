import './index.css'
import Navbar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './router';
import Footer from './components/Footer'
import CartProvider from './context/CartContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return ( 
    <div>
      <CartProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
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