const connection = require('../database/connection');

module.exports = {
    async index(request, response){ //listagem das tabelas
        //método de paginação
        const { page = 1 } = request.query;// começa da página 1 e vai incramentando de 1 em 1
        
        //retornando a quantidade de casos:
        const [count] = await connection('incidents').count();
        //como count está entre colchetes, ele somente retornará 1 resultado

        const incidents = await connection('incidents')
        //join => relacionando dados de 2 tabelas, no caso para poder mostrar os dados da ong na listagem de casos
            .join('ongs', 'ong_id', '=', 'incidents.ong_id') // pegando apenas os dados da ong do mesmo id
            .limit(5)
            .offset((page - 1) * 5)//vai de 5 em 5, já que a 'page' vai incrementando de 1 em 1
            .select([
                'incidents.*', //o asteriscos indicam pra ela pegar TUDO que tem dentro da tabela incidents
                'ongs.name',//selecionando somente os campos de ong que eu quero 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ]);
            
        response.header('X-Total-Count', count['count(*)']);//printando no cabeçalho o numero de páginas

        return response.json(incidents);
    },
    async create(request, response){
        const {title, description, value} = request.body;
        //preciso fazer uma autenticação e isso está presente no cabeçalho da nossa requisição
        //além disso o cabeçalho tem acesso, se concedido, à localização do usuário, caso eu queira 
        //dar uma resposta em um idioma diferente para cada país, por exemplo.
        const ong_id = request.headers.authorization;
        //esse const [id] é para listar, começando pelo id do primeiro caso sendo 1, do segundo sendo 2 e assim por diante... 
        //já que os casos não necessitam de ids mais elaborados
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },
    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;//checar o id da ong a qual está querendo deletar o caso!!!!

        const incidents = await connection('incidents')
            .where('id', id)// buscar o id escolhido na lista de ids de casos
            .select('ong_id')//que tenha como ong_id o id da ong autentificada 
            .first();// me retorna apenas 1 resultado

        if(incidents.ong_id !== ong_id){
            return response.status(401).json({ error: 'Operation not permitted.'}); 
        //o código de status 401 quer dizer que a requisição feita não é autorizada
        //quando o usuario não tem autorização pra realizar a operação
        }

        //se deu tudo certo
        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); //o código de status 204 indica que foi enviada a resposta mas ela não tem conteúdo
     },
};