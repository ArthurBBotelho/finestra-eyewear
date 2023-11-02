import React from "react";
import search from '../../imagens/icons/search.svg'

function SearchWidget() {
    return (
        <div>
            <a><img className="w-6 h-6" src={search} alt="Icone de Busca" ></img></a>
        </div>
    )
}

export default SearchWidget