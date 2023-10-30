import React, { useState, useEffect } from "react";
import Button from '../Button'
import OculosAmarelo from '../../imagens/photos/oculos-amarelo.jpg'
import OculosFlor from '../../imagens/photos/oculos-flor.jpg'
import ItemList from "../ItemList";

function ItemListContainer() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        pegarProdutos()
    }, [])

    const pegarProdutos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                 setProdutos([
                    { id: 1, nome: "Phinet", estoque: 10, imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/phinet/phinet-front.png?raw=true" },
                    { id: 2, nome: "Mirage", estoque: 5, imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/mirage/mirage-front.png?raw=true" }
                 ]);
                 resolve();
            }, 2000);
        });
    }

    return(
        <div>
            <div class="flex mt-12 w-5/6 mx-auto gap-12">
                <div>
                    <img className="mt-8" src={OculosFlor}></img>
                </div>
                <div className="mt-8">
                    <img src={OculosAmarelo}></img>
                    <Button texto="Oculos de Sol" />
                    <Button texto="Oculos de Grau" />
                </div>
            </div> 
            <div>
                <h1 className="font-bold text-xl">Produtos</h1>
                <div className="flex justify-center font-bold">
                    <ItemList produtos={produtos}/>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer