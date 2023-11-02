import React from "react";
import user from '../../imagens/icons/user.svg';

function UserWidget() {
    return (
        <div>
            <a><img className="w-8 h-8" src={user} alt="Icone do Usuário" ></img></a>
        </div>
    )
}

export default UserWidget