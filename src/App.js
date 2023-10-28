import './index.css'
import NavBar from './components/NavBar'
import Button from './components/Button'
import OculosAmarelo from './imagens/photos/oculos-amarelo.jpg'
import OculosFlor from './imagens/photos/oculos-flor.jpg'

function App() {
  return (
    <div className='w-full'>
      <NavBar />
      <div className="flex mt-12 w-4/5 mx-auto">
        <div>
          <img src={OculosAmarelo}></img>
        </div>
        <div>
          <img src={OculosFlor}></img>
          <Button />
        </div>
      </div> 
    
    </div>
  );
}

export default App;