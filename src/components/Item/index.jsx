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
        <div>
            <a><img className="w-1/3" src={produto.imagem} alt="Oculos"></img></a>
            <ItemCount count={count} soma={soma} subtracao={subtracao}/>
            <Button texto="Adicionar ao Carrinho"/>
        </div>
    )
}

export default Item