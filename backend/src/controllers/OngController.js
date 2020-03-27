const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response){ //listagem das tabelas
        const ongs = await connection('ongs').select('*');//o asteriscos indicam pra ela pegar TUDO que tem dentro da tabela ongs

        return response.json(ongs);
    },
    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;
        //gerar 4 bytes de caracteres aleatórios e depois transformar tudo em uma sting no formato hexadecimal:
        const id = crypto.randomBytes(4).toString('HEX');
        //conectar ao banco de dados:
        await connection('ongs').insert({
            id,
            name,
            email, 
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });        
    }
};