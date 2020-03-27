const express = require('express'); //todas as funcionalidades do express são habilitadas (biblioteca de web services)

const cors = require("cors");//determina quem pode acessar a nossa aplicação
//importando o routes
const routes = require('./routes')/// o ponto barra indica que estão na mesma pasta
//lembrando que routes é um arquivo e não um pacote como o express

const app = express();
 /*
 app.use(cors({
   origin: 'http://BeTheHero.com.br'//qual o endereço que poderá acessar a nossa aplicação
}));
 */
app.use(cors());// permitindo que todas as aplicações front-end possam acessar esse back-end

//sempre avisar o tipo de arquivo que será utilizado para processar os dados (neste caso, é o json)

app.use(express.json());
app.use(routes); // indicando o uso do arquivo routes 
//como se eu tivesse criando uma biblioteca

//criar rota
// essa barra é a rota raiz do node
// essa função do app.get sempre recebe dois parametros
/*
app.get('/', (request, response) => { no browser somente o gete pode emitir uma resposta
    return response.json({//retornando resposta no formato json 
        evento: 'Semana Omnistack 11.0',
        aluno: 'Clara Acruchi'
    });
});


// rota/recurso

==> QUERY PARAMS

app.get('/users', (request, response) => {// consigo obter a resposta pelo software Insomnia
    const params = request.query;//por aqui eu consigo acessar todos os parametros que sao enviados dentro do endereço
    // http://localhost:3333/users?nome=Clara
    //ele vai me retornar => { Name: 'Clara' } dentro do meu console log (o terminal)
    //tambem serve para mais de 1, dependendo da requisição -> se uso  /users?name=Clara&idade=21
    //ele me retornará => { nome: 'Clara' , idade: '21'}
    console.log(params);
    
    return response.json({//retornando resposta no formato json (não vamos trabalhar com resposta no formato texto)
        evento: 'Semana Omnistack 11.0',
        aluno: 'Clara Acruchi'
    });
});

==> ROUTE PARAMS

app.get('/users/:id', (request, response) => {
    const params = request.params;// vou receber o id que eu estou buscando
    // vai me retornar no terminal, caso eu requisite => /users/1 => { id: '1' }

    console.log(params);

    return response.json({//retornando resposta no formato json (não vamos trabalhar com resposta no formato texto)
        evento: 'Semana Omnistack 11.0',
        aluno: 'Clara Acruchi'
    });
});

//==> REQUEST BODY

//criar um usuario:
app.post('/users', (request, response) => {//uso post para CRIAR
    const body = request.body;
    console.log(body);

    return response.json({//retornando resposta no formato json (não vamos trabalhar com resposta no formato texto)
        evento: 'Semana Omnistack 11.0',
        aluno: 'Clara Acruchi'
    });
});
*/







app.listen(3333); // abrindo porta para minha aplicação => posso colocar no navegador "localhost:3333"



