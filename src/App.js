import './index.css'
import Navbar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './router';
import Main from './pages/Main'

function App() {
  return (
    <div class='w-full'>
      <BrowserRouter>
        <Navbar />
          <Router />
      </BrowserRouter>
      <Main />
    </div>
  );
}

export default App;