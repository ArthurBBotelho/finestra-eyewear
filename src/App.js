import './index.css'
import NavBar from './components/NavBar'
import Button from './components/Button'
import Oculos from './imagens/photos/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg';

function App() {
  return (
    <div className='w-full'>
      <NavBar />
      <div className="flex mt-12 w-4/5 mx-auto">
        <div>
          <img src={Oculos}></img>
        </div>
        <div>
          <img src={Oculos}></img>
          <Button />
        </div>
      </div> 
    
    </div>
  );
}

export default App;