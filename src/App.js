import './index.css'
import NavBar from './components/NavBar'
import Button from './components/Button'
import OculosAmarelo from './imagens/photos/oculos-amarelo.jpg'
import OculosFlor from './imagens/photos/oculos-flor.jpg'
import Products from './Products'

function App() {
  return (
    <div class='w-full'>
      <NavBar />
      <div class="flex mt-12 w-5/6 mx-auto gap-12">
        <div>
          <img class="" src={OculosFlor}></img>
        </div>
        <div class="mt-8">
          <img src={OculosAmarelo}></img>
          <Button />
        </div>
      </div> 
      <div>
        <h1>Produtos</h1>
        <Products />
      </div>
    </div>
  );
}

export default App;