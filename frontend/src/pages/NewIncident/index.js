import React from 'react';

import {Link} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'

//todo componente do react a tag "style" e eu posso passa pra ela um objeto do javascript.
//a primeira chave indica que eu estou incluindo uma classe javascript no html, já a segunda indica que eu estou inserindo um objeto
//então eu posso declarar CSS, já que eu tenho todas as propriedades de CSS para trabalhar
export default function NewIncident(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home
                    </Link>

                </section>
                <form> 
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição"></textarea>
                    <input placeholder="Valor em reais"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}