import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

//o browserRouter possibilita que exista uma conexão de rotas 
// o switch possibilita que apenas uma rota seja executada por momento, ele unca vai chamar mais de uma rota
// o "exact" antes do component={Logon}, indica que ele só pode acessar aquela rota caso o endereço seja exatamente igual,
// se não fizesse isso, toda vez que ele tentasse acessar alguma rota diferente, cairia na primeira (logon)

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}