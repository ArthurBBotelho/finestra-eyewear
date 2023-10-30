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
                    { id: 1, nome: "Oculos Rayban", estoque: 10, imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/phinet/phinet-front.png?raw=true" },
                    { id: 2, nome: "Oculos Rayban", estoque: 5 }
                 ]);
                 resolve();
            }, 2000);
        });
    }

    return(
        <div>
            <div class="flex mt-12 w-5/6 mx-auto gap-12">
                <div>
                    <img class="" src={OculosFlor}></img>
                </div>
                <div class="mt-8">
                    <img src={OculosAmarelo}></img>
                    <Button texto="Oculos de Sol" />
                    <Button texto="Oculos de Grau" />
                </div>
            </div> 
            <div>
                <h1>Produtos</h1>
                <ItemList produtos={produtos}/>
            </div>
        </div>
    )
}

export default ItemListContainer