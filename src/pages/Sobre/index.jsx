import Maps from "../../components/Map"
import Nike from "../../imagens/partership/nike.png"

function Sobre() {
  
    return (
        <div>
            
            <div>
                <h1 className="font-thin text-3xl flex justify-center my-12">Sobre</h1>
                <p className="font-thin text-2xl flex-col justify-center mx-64 mb-12"><b>FINESTRA EYEWEAR</b>. A marca começa na itália no anos 80 quando acontece a fusão perfeita entre a tradição artesanal e a inovação contemporânea. Finestra vem do italiano que significa janela, nosso produto é focado em uma experiencia visual rica que vai muito além de um acessório, criando uma experiência única para os amantes de moda e qualidade. Seja parte do legado da moda e encontre o par de óculos que irá elevar o seu estilo a um novo patamar. É com grande satisfação que convidamos você a explorar a nossa plataforma online, concebida como uma janela de acesso exclusiva ao fascinante mundo dos óculos de grife. O nosso site representa a confluência entre estilo contemporâneo e tradição atemporal, onde a elegância se encontra com a herança de excelência. Cada página é meticulosamente projetada para cativar os entusiastas da moda, proporcionando uma experiência única e imersiva. Nossa coleção é um testemunho da habilidade artesanal e dedicação à sofisticação, onde cada par de óculos narra a história de marcas renomadas e sua busca incessante por beleza e inovação. Permita-se embarcar nessa jornada, onde o estilo transcende o efêmero e se consolida como um legado de distinção.</p>
            </div>
            <div>
                <h1 className="font-thin text-3xl flex justify-center my-12">Nossos Colaboradores</h1>
                <div></div>
            </div>
            <div>
                <h1 className="font-thin text-3xl flex justify-center my-12">Nossos Parceiros</h1>
                <div>
                    
                </div>
            </div>
            <div>
                <h1 className="font-thin text-3xl flex justify-center my-12">Localização</h1>
                <Maps />
            </div>
        </div>
    )
}

export default Sobre