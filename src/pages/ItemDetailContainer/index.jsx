import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from "../../components/Button";
import ItemCount from "../../components/ItemCount";

function ItemDetailContainer() {
    const {id} = useParams()

    const [produto, setProduto] = useState({})

    const produtos = [
        { id: 1, nome: "Phinet", estoque: 10, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/phinet/phinet-front.png?raw=true" },
        { id: 2, nome: "Mirage", estoque: 5, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/mirage/mirage-front.png?raw=true" }
    ]

    useEffect(() => {
        pegarProduto();
    }, []);

    function pegarProduto() {
        produtos.forEach((produto) => {
            if(produto.id == id) setProduto(produto)
        });
    }

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
            <h1 className="">{produto.nome}</h1>
            <img className="flex justify-center w-1/2" src={produto.imagem} alt="Oculos"></img>
            <p>Restam apenas {produto.estoque} unidades desse produto!</p>
            <ItemCount count={count} soma={soma} subtracao={subtracao}/>
            <Button texto="Adiconar ao Carrinho"/>
        </div>
    )
}

export default ItemDetailContainer