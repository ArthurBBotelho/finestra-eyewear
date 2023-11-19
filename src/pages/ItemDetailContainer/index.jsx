import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from "../../components/Button";
import ItemCount from "../../components/ItemCount";
import { UseCart } from '../../context/CartContext';

function ItemDetailContainer() {
    const {addCart} = UseCart()
    const {id} = useParams()
    
    const [produto, setProduto] = useState({})

    const produtos = [
                    { id: 1, nome: "Phinet", price: 499, estoque: 10, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/phinet/phinet-front.png?raw=true" },
                    { id: 9, nome: "Malik", price: 389, estoque: 10, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/malik/malik-front.png?raw=true" },
                    { id: 4, nome: "Dominic", price: 559, estoque: 5, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/dominic/dominic-front.png?raw=true" },
                    { id: 5, nome: "Emma", price: 439, estoque: 4, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/emma/emma-front.png?raw=true" },
                    { id: 6, nome: "Frame", price: 599, estoque: 12, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/frame/frame-front.png?raw=true" },
                    { id: 8, nome: "Mac", price: 399, estoque: 3, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/mac/mac-front.png?raw=true" },
                    { id: 7, nome: "Lyra", price: 499, estoque: 9, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/lyra/lyra-front.png?raw=true" },
                    { id: 2, nome: "Mirage", price: 439, estoque: 5, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/mirage/mirage-front.png?raw=true" },
                    { id: 3, nome: "Bossa", price: 469, estoque: 6, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/bossa/bossa-front.png?raw=true" },
                    { id: 10, nome: "Maxx", price: 589, estoque: 6, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/maxx/maxx-front.png?raw=true" },
                    { id: 11, nome: "Otto", price: 529, estoque: 10, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/otto/otto-front.png?raw=true" },
                    { id: 12, nome: "Sprint", price: 449, estoque: 2, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/sprint/sprint-front.png?raw=true" }
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

    const addItem = () => {
        console.log(produto.nome)
        addCart({
            ...produto, 
            quantidade: count,    
        })
    }

    return(
        <div className="mx-36 my-12 border-2 border-black p-12">
            <div className="columns-2">
                <div>
                    <img src={produto.imagem} alt={produto.nome}></img>
                </div>
                <div className="">
                    <h1 className="flex font-bold text-3xl p-2">{produto.nome}</h1>
                    <h1 className="flex font-thin text-2xl p-2">R$ {produto.price}</h1>
                    <p className="p-2">Restam apenas {produto.estoque} unidades desse produto!</p>
                    <ItemCount count={count} soma={soma} subtracao={subtracao} className="p-2"/>
                    <Button onClick={addItem} texto="Adiconar ao Carrinho"/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer