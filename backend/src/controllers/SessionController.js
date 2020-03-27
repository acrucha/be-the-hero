const connection = require('../database/connection');

module.exports = {
    //fazendo login
    async create(request, response){
        //recebo o id da ong que quer se conectar
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)// procurar se a ong existe
            .select('name')//mostro o nome da ong logada
            .first();//rertorno somente 1
        
        if (!ong){// caso a ong não exista
            return response.status(400).json({ erro: 'No ONG foung with this ID'});
        }

        return response.json(ong);
    }
}