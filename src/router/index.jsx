import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sobre from '../pages/Sobre';
import ItemListContainer from '../pages/ItemListContainer';
import ItemDetailContainer from '../pages/ItemDetailContainer';
import ItemListCategory from '../pages/ItemListCategory';
import Main from '../pages/Main';

function Router() {
    
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/produtos" element={<ItemListContainer />}/>
                <Route exact path="/produto/:id" element={<ItemDetailContainer />}/>
                <Route exact path="/produtos/:category" element={<ItemListCategory />}/>
                <Route exact path="/sobre" element={<Sobre />}/>
            </Routes>
        </div>
    )
}

export default Router