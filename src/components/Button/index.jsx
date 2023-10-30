import React from "react";

function Button({ texto }) {
    return (
        <div>
            <button class="bg-black font-normal text-white text-xl w-48 h-8 m-2">{texto}</button>
        </div>
    )
}

export default Button