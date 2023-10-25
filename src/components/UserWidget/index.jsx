import React from "react";
import user from '../../imagens/icons/user.svg';

function UserWidget() {
    return (
        <div>
            <a class="pr-12"><img class="w-6" src={user} alt="Icone do Usuário" ></img></a>
        </div>
    )
}

export default UserWidget