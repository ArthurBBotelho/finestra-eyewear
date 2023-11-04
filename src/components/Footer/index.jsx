import { ReactComponent as Instagram } from '../../imagens/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../imagens/icons/facebook.svg';
import { ReactComponent as Twitter } from '../../imagens/icons/twitter.svg';
import { ReactComponent as Linkedin } from '../../imagens/icons/linkedin.svg';

function Footer () {
    return(
        <div className="bg-black flex">
            <div className="font-bold text-8xl text-white w-full h-64 px-12 py-6">
                <p>FINESTRA</p>
                <p>EYEWEAR</p>
            </div>
            <div className="px-12 pt-12 mt-6">
                <div className="flex">
                    <Instagram className="h-16 w-18"/>
                    <Facebook className="h-16 w-18"/>
                    <Twitter className="h-16 w-18"/>
                    <Linkedin className="h-16 w-18"/>
                </div>
                <div className="bg-white h-1 w-auto"></div>
                <div className="text-white">
                    <p>© Finestra Eyewear, Produção e Comércio de Artesanatos CNPJ 13.542.297/0001-00</p>
                    <p>Website desenvolvido por Arthur Botelho 2023 </p>
                </div>
            </div>
        </div>
    )
}

export default Footer