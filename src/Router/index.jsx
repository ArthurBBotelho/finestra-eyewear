import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sobre from '../pages/Sobre';
import ItemListContainer from '../pages/ItemListContainer';
import Mirage from '../pages/ItemDetailContainer/Mirage';
import Main from '../pages/Main';

function Router() {
    const location = useLocation()

    return (
        <div>
            {location.pathname === 'pages' && <Main />}
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/produtos" element={<ItemListContainer />}/>
                <Route exact path="/produtos/mirage" element={<Mirage />}/>
                <Route exact path="/sobre" element={<Sobre />}/>
            </Routes>
        </div>
    )
}

export default Router