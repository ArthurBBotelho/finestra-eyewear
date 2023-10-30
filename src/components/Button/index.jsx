import React from "react";
import '../../index.css';

function Button({ texto }) {
    return (
        <div>
            <button class="bg-black font-normal text-white w-24 ">{texto}</button>
        </div>
    )
}

export default Button