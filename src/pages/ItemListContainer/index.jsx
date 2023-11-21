import React, { useState, useEffect } from "react";
import ItemList from "../../components/ItemList";
import db from "../../services/firebase";
import { collection, getFirestore, getDocs } from "firebase/firestore";

function ItemListContainer() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        pegarProdutos()
    }, [])

    const pegarProdutos = () => {
        const produtosCollection = collection(db, "produtos");
        getDocs(produtosCollection).then((snapshot) => {
            setProdutos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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

export default ItemListContainer