import Button from '../../components/Button'
import OculosGrau from '../../imagens/photos/oculos-grau.png'
import OculosSol from '../../imagens/photos/oculos-sol.png'
import Navbar from '../../components/NavBar'
import Video from '../../imagens/video/video-campaign.mp4'
import { NavLink } from 'react-router-dom'

function Main(){
    return(
        <div>
            <div>
                <video loop autoPlay muted className="mx-auto w-screen" src={Video}></video>
            </div>
            <div className="font-thin text-6xl flex justify-center m-8">
                <p>MAIS QUE ÓCULOS, UMA VISÃO</p>
            </div>
            <div className="flex m-12 w-auto mx-12 gap-12">
                <div>
                    <a className="text-4xl font-thin">GRAU</a>
                    <NavLink to="/produtos/grau"><img className="transition hover:opacity-70 duration-1000" src={OculosGrau}></img></NavLink>
                </div>
                <div>
                    <a className="text-4xl font-thin">SOL</a>
                    <NavLink to="/produtos/sol"><img className="transition hover:opacity-70 duration-1000" src={OculosSol}></img></NavLink>
                </div>
            </div> 
        </div>
    )
}

export default Main