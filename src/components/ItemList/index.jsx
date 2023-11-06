import React, { useState, useEffect } from "react";
import Item from "../Item";

function ItemList({produtos}) {
    const [listaSol, setListaSol] = useState([])   
    const [listaGrau, setListaGrau] = useState([])  
    
    useEffect(() => {
        produtos.map((produto) => {
            if (produto.category === "Oculos de Sol" ) 
            { 
                const aux = listaSol
                aux.push(produto)
                setListaSol(aux)
            }
            if (produto.category === "Oculos de Grau" )
            { 
                const aux = listaGrau
                aux.push(produto)
                setListaGrau(aux)
            }
        })
    }, [])
    
    return(
        <div className="flex flex-wrap">
            {listaSol.map((produto) => (<Item key={produto.id} produto={produto}/>))}
            {listaGrau.map((produto) => (<Item key={produto.id} produto={produto}/>))}
        </div>
    )
}

export default ItemList