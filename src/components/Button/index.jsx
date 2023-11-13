import React from "react";

function Button({ texto,onClick }) {
    return (
        <div>
            <button onClick={onClick} className="bg-black font-normal text-white text-xl w-64 h-8 m-2">{texto}</button>
        </div>
    )
}

export default Button