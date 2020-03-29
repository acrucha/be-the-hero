import React from 'react';

import {Link} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'

//todo componente do react a tag "style" e eu posso passa pra ela um objeto do javascript.
//a primeira chave indica que eu estou incluindo uma classe javascript no html, já a segunda indica que eu estou inserindo um objeto
//então eu posso declarar CSS, já que eu tenho todas as propriedades de CSS para trabalhar
export default function Register(){
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
                <form> 
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Whatsapp" />

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
    );
}