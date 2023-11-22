import React, { useState, useEffect } from "react";
import Item from "../Item";

function ItemList({produtos}) {
    const [listaSol, setListaSol] = useState([])   
    const [listaGrau, setListaGrau] = useState([])  

    function selecionarItems() {
        setListaSol(produtos.filter((produto) => produto.category === "Oculos de Sol"))
        setListaGrau(produtos.filter((produto) => produto.category === "Oculos de Grau"))
    }
    
    useEffect(() => {
        selecionarItems()  
    }, [produtos])
    
    return(
        <div className="flex flex-col">
            { listaGrau.length > 0 && <div className="flex flex-wrap">
                <h1>Oculos de Grau</h1>
                {listaGrau.map((produto) => (<Item key={produto.id} produto={produto}/>))}
            </div>}
            { listaSol.length > 0 && <div className="flex flex-wrap">
                <h1>Oculos de Sol</h1>
                {listaSol.map((produto) => (<Item key={produto.id} produto={produto}/>))}
            </div>}
        </div>
    )

}

export default ItemList