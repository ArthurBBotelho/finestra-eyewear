import React from "react";

function ItemCount( {soma, subtracao, count} ) {
    return(
        <div className="flex justify-center w-32">
            <button className="bg-black text-white w-8 h-6" onClick={soma}> + </button>

            <div className="w-12 flex justify-center" >{count}</div>
           
            <button className="bg-black text-white w-8 h-6" onClick={subtracao}> - </button>
        </div>
    )
}

export default ItemCount