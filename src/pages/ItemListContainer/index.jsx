import React, { useState, useEffect } from "react";
import Button from '../../components/Button'
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
            <h1 className="font-bold text-xl">Produtos</h1>
            <div className="flex justify-center font-bold p-6">
                <ItemList produtos={produtos}/>
            </div>
       </div>
    )
}

export default ItemListContainer