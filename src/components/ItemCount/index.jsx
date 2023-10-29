import React from "react";

function ItemCount() {
    const [count, setCount] = useState(0);

    const soma = () => {
        setCount(count + 1)
    }

    const subtração = () => {
        if(count > 0) {
            return setCount(
            count - 1)
        }
    }

    return(
        <div>
            <div>{count}</div>

            <button onClick={soma}>+</button>
            <button onClick={subtração}>-</button>
        </div>
    )
}

export default ItemCount