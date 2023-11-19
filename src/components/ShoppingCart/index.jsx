import React from "react";

function ShoppingCart({
    visibility,
    produtos,
    removerProdutos,
    closeCart,
    quantityChange,
}) {
    return
        <div className="bg-slate-400" style={{display: visibility ?     "block" : "none"}}>
            <div>
                <h3>Carrinho de Compras</h3>
                <button onClick={closeCart}>X</button>
            </div>
            <div>
                {produtos.length === 0 && (<span>Carrinho de compras vazio.</span>)}
                {produtos.map(produto => (
                    <div key={produto.id}>
                        <img src={produto.imagem} alt={produto.nome}></img>
                    </div>
                ))}
            </div>
        </div>
}

export default ShoppingCart