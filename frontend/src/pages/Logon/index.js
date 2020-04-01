import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; //trocamos a tag "a" para a tag "Link"
//essa ferramenta "Link" serve para que a página não recarregue toda vez que mude de rota => para ter um comportamento de SPA
import { FiLogIn } from 'react-icons/fi'; // importando o Feather icons

import api from "../../services/api";

import './styles.css'

//para colocar uma imagem você deve importar ela para dentro do react
//como ela é uma variável, dentro da tag img precisamos colocá-la entre chaves
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id } );

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile'); // leva o usuário até o endereço '/profile' => que é a página de profile
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src= {logoImg} alt="Be The Hero"/>

                <form onSubmit={ handleLogin }>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={ id }
                        onChange={ e => setId( e.target.value ) }
                    /> 
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