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
        <div className="flex-col justify-center border-2 border-black w-fit">
            <h1>{produto.nome}</h1>
            <a><img className="flex justify-center w-1/2" src={produto.imagem} alt="Oculos"></img></a>
            <div>
                <ItemCount count={count} soma={soma} subtracao={subtracao}/>
            </div>
            <Button texto="Adicionar ao Carrinho"/>
        </div>
    )
}

export default Item