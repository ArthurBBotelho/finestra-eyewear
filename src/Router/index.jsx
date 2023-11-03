import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from '../pages/Sobre';
import ItemListContainer from '../pages/ItemListContainer';

function Router() {
  
    return (
        <div>
            <Routes>
                <Route exact path="/produtos" element={<ItemListContainer />}/>
                <Route exact path="/sobre" element={<Sobre />}/>
            </Routes>
        </div>
    )
}

export default Router