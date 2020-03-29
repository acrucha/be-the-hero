import React from 'react';
import {Link} from 'react-router-dom' //trocamos a tag "a" para a tag "Link"
//essa ferramenta "Link" serve para que a página não recarregue toda vez que mude de rota => para ter um comportamento de SPA
import { FiLogIn } from 'react-icons/fi' // importando o Feather icons

import './styles.css'

//para colocar uma imagem você deve importar ela para dentro do react
//como ela é uma variável, dentro da tag img precisamos colocá-la entre chaves
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src= {logoImg} alt="Be The Hero"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"/> 
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>

                </form>
            </section>

            <img src= {heroesImg} alt="Heroes"/>
        </div>
        
    );  
}