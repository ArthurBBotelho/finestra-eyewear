import React from "react";

function ItemCount( {soma, subtracao, count} ) {
    return(
        <div>
            <div>{count}</div>

            <button onClick={soma}>+</button>
            <button onClick={subtracao}>-</button>
        </div>
    )
}

export default ItemCount