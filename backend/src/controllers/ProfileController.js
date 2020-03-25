/**
 * Controlador responsável pelo perfil das ongs. 
 * 
*/

const connection = require('../database/connection')

module.exports = {

    /**
     * Função responsável pela listagem de todos os profiles. 
     * 
    */
    async index(request, response){
        const ong_id = request.headers.authorization
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')
        
        return response.json(incidents)
    }
}