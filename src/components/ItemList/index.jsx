import React from "react";
import Item from "../Item"

function ItemList({produtos}) {
    return(
        <div>
            {produtos.map((produto) => (<Item key={produto.id} produto={produto}/>))}
        </div>
    )
}

export default ItemList