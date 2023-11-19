import React from "react";
import { useState, useEffect } from 'react';
import { UseCart } from '../../context/CartContext';

function ShoppingCart({
    visibility,
    closeCart,
}) {
    const [produtosInCart, setProdutos] = useState([]);
    const { cart, removerItem } = UseCart()

    return (
        <div className="bg-slate-400" style={{display: visibility ? "block" : "none"}}>
            <div>
                <h3>Carrinho de Compras</h3>
                <button onClick={closeCart}>X</button>
            </div>
            <div>
                {cart.length === 0 && (<span>Carrinho de compras vazio.</span>)}
                {cart.map(produto => (
                    <div key={`cart-${produto.id}`}>
                        <img src={produto.imagem} alt={produto.nome}></img>
                        <p onClick={() => removerItem(produto.id)}>Excluir</p>
                    </div>
                ))}
            </div>
        </div>)
}

export default ShoppingCart