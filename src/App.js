import './index.css'
import Navbar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './router';
import Main from './pages/Main';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Router />
      </BrowserRouter>
      <Main />
      <Footer />
    </div>
  );
}

export default App;