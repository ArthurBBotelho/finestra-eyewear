import React from "react";
import { useState, useEffect } from 'react';
import { UseCart } from '../../context/CartContext';
import Button from "../Button";
import toast from "react-hot-toast";
import db from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";

function ShoppingCart({
    visibility,
    closeCart,
}) {
    const [produtosInCart, setProdutos] = useState([]);
    const { cart, removerItem, removeAllItem } = UseCart()

    function sendOrder(){

        const orderscollection = collection(db, "orders")

        addDoc(orderscollection, {
            buyer:{
                name:"Klayton",
                phone:"11 930308975",
                email:"blabla@gmail.com"
            },
            items:[...cart],
            //  total:totalPrice.props.value,
             time:Date.now()
        })
        .then( ()=>{
            toast.success("Pedido enviado com sucesso!", {
                style: {
                  border: '1px solid #000000',
                  padding: '16px',
                  color: '#000000',
                  borderRadius: 0
                },
                iconTheme: {
                  primary: '#000000',
                  secondary: '#FFFFFF',
                },
              });
              removeAllItem();
        }) 
    }

    return (
        <div className="border-2 border-black m-10 p-2 w-1/4" style={{display: visibility ? "block" : "none"}}>
            <div className="text-xl flex-row">
                <h3 className="text-xl" >Carrinho de Compras</h3>
                <button onClick={closeCart}>X</button>
            </div>
            <div>
                {cart.length === 0 && (<span>Carrinho de compras vazio.</span>)}
                {cart.map(produto => (
                    <div key={`cart-${produto.id}`}>
                        <img src={produto.imagem} alt={produto.nome}></img>
                        <div className="font-thin text-3xl flex justify-center">
                            <p>{produto.nome}</p>
                            <p>R$ {produto.price}</p>
                        </div>
                        <p className="text-xl" onClick={() => removerItem(produto.id)}>Excluir</p>
                    </div>
                ))}
                <Button onClick={sendOrder} texto="Finalizar Compra" />
            </div>
        </div>)
}

export default ShoppingCart