import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from '../components/sobre';

function ROuter() {
    const location = useLocartion();

    return (
        <div>
            <Routes>
                <Route exact path="/sobre" element={<Sobre />}/>
            </Routes>
        </div>
    )
}