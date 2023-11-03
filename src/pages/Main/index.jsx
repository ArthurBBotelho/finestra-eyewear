import React from "react";
import React, { useState, useEffect } from "react";
import Button from '../../components/Button'
import OculosAmarelo from '../../imagens/photos/oculos-amarelo.jpg'
import OculosFlor from '../../imagens/photos/oculos-flor.jpg'
import Navbar from '../../components/NavBar'

function Main(){
    return(
        <div>
            <Navbar />
            <div class="flex mt-12 w-5/6 mx-auto gap-12">
                <div>
                    <img className="mt-8" src={OculosFlor}></img>
                </div>
                <div className="mt-8">
                    <img src={OculosAmarelo}></img>
                    <p clasName="font-bold">Mais do que óculos, vendemos uma visão</p>
                    <Button texto="Oculos de Sol" />
                    <Button texto="Oculos de Grau" />
                </div>
            </div> 
        </div>
    )
}