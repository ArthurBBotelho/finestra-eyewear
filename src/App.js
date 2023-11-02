import './index.css'
import Navbar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './router';

function App() {
  return (
    <div class='w-full'>
      <BrowserRouter>
        <Navbar />
          <Router />
      </BrowserRouter>
      
    </div>
  );
}

export default App;