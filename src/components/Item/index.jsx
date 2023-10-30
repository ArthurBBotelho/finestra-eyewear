import React, { useState } from "react";
import Button from "../Button";
import ItemCount from "../ItemCount";

function Item({produto}) {
    const [count, setCount] = useState(0);

    const soma = () => {
        if(count < produto.estoque) setCount(count + 1)
    }

    const subtracao = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return(
        <div class="">
            <a><img class="w-1/2" src={produto.imagem} alt="Oculos de Grau Phinet"></img></a>
            <ItemCount count={count} soma={soma} subtracao={subtracao}/>
            <Button texto="Adicionar ao Carrinho"/>
        </div>
    )
}


export default Item