import React from "react";
import search from '../../imagens/icons/search.svg'

function SearchWidget() {
    return (
        <div>
            <a class="pr-12"><img class="w-6" src={search} alt="Icone de Busca" ></img></a>
        </div>
    )
}

export default SearchWidget