import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
//eu quero que a função handleRegster seja utilizada assim que o usuário der um submit (clicar em "cadastrar")


import './styles.css';

import logoImg from '../../assets/logo.svg';

//todo componente do react a tag "style" e eu posso passa pra ela um objeto do javascript.
//a primeira chave indica que eu estou incluindo uma classe javascript no html, já a segunda indica que eu estou inserindo um objeto
//então eu posso declarar CSS, já que eu tenho todas as propriedades de CSS para trabalhar
export default function Register(){

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        const data = {
            name, 
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/'); // leva o usuário até o endereço '/' => que é a página de login
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">

            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>

                </section>
                <form onSubmit={handleRegister}> 
                    <input 
                        placeholder="Nome da ONG"
                        value={ name }
                        onChange={ e => setName(e.target.value) }                    
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={ email }
                        onChange={ e => setEmail(e.target.value) }   
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={ whatsapp }
                        onChange={ e => setWhatsapp(e.target.value) }   
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={ city }
                            onChange={ e => setCity(e.target.value) }   
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            value={ uf }
                            onChange={ e => setUf(e.target.value) }   
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
    );
}