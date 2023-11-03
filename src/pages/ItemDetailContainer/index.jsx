import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

    return(
        <div>
            <h1>{produto.nome}</h1>
        </div>
    )
}

export default ItemDetailContainer