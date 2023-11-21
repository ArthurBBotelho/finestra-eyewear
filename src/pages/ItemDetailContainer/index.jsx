import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from "../../components/Button";
import ItemCount from "../../components/ItemCount";
import { UseCart } from '../../context/CartContext';
import db from '../../services/firebase';
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
    const {addCart} = UseCart()
    const {id} = useParams()
    
    const [produto, setProduto] = useState({})

    

    useEffect(() => {
        pegarProduto();
    }, []);

    function pegarProduto() {
        const produtosRef = doc(db, "produtos", id);
        getDoc(produtosRef).then((snapshot) => {
            if(snapshot.exists()) {
                setProduto({ id: snapshot.id, ...snapshot.data() });
            }
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