import React, { useState, useEffect } from "react";
import ItemList from "../../components/ItemList";

function ItemListContainer() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        pegarProdutos()
    }, [])

    const pegarProdutos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                 setProdutos([
                    { id: 1, nome: "Phinet", estoque: 10, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/phinet/phinet-front.png?raw=true" },
                    { id: 2, nome: "Mirage", estoque: 5, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/mirage/mirage-front.png?raw=true" }
                 ]);
                 resolve();
            }, 1000);
        });
    }

    return(
        <div>
            <h1 className="font-thin text-3xl flex justify-center my-12">PRODUTOS</h1>
            <p className="font-thin text-2xl flex justify-center mx-64 mb-12">Nossos produtos representam o pináculo da elegância e da qualidade no mundo dos óculos de grife. Cada peça é cuidadosamente elaborada com atenção aos detalhes, incorporando os mais finos materiais e a mais avançada tecnologia, resultando em obras de arte para serem exibidas em seu rosto.</p>
            <div className="flex justify-center columns-2">
                <ItemList produtos={produtos}/>
            </div>
       </div>
    )
}

export default ItemListContainer