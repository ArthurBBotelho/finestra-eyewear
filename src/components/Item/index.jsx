import React, { useState } from "react";
import Button from "../Button";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

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
        <div className="mx-36 my-12 w-1/3">
            <div className="border-2 border-black">
                <h1 className="text-3xl font-bold flex justify-center">{produto.nome}</h1>
                <img className="flex justify-center" src={produto.imagem} alt="Oculos"></img>
                <Link to={`/produto/${produto.id}`} className="flex justify-center">
                    <Button texto="Detalhes do Produto"/>
                </Link>
            </div>
        </div>
    )
}

export default Item