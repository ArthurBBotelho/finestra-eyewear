import React, { useState, useEffect } from "react";
import ItemList from "../../components/ItemList";
import db from "../../services/firebase";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { useParams } from "react-router-dom";

function ItemListCategory() {
    const [produtos, setProdutos] = useState([])

    const { category } = useParams()

    useEffect(() => {
        pegarProdutos()
    }, [])

    const pegarProdutos = () => {
        // const produtosCollection = collection(db, "produtos");
        // getDocs(produtosCollection).then((snapshot) => {
        //     setProdutos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        // });
        const type = category === "grau" ? "Oculos de Grau" : "Oculos de  Sol";
        const produtosCollection = query(collection(db, "produtos"), where("category", "==" , type), limit(6));        
        getDocs(produtosCollection).then((snapshot) => {
            const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProdutos(items);
        });
    }

    return(
        <div>
            <h1 className="font-thin text-3xl flex justify-center my-12">PRODUTOS</h1>
            <p className="font-thin text-2xl flex justify-center mx-64 mb-12">Nossos produtos representam o pináculo da elegância e da qualidade no mundo dos óculos de grife. Cada peça é cuidadosamente elaborada com atenção aos detalhes, incorporando os mais finos materiais e a mais avançada tecnologia, resultando em obras de arte para serem exibidas em seu rosto.</p>
            <div className="flex justify-center columns-2">
                <ItemList produtos={produtos}/>
            </div>
       </div>
    )
}

export default ItemListCategory