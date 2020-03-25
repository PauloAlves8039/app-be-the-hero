/**
 * Controlador responsável pelo login das ongs. 
 * 
*/

const connection = require('../database/connection')

module.exports = {

    /**
     * Função responsável pela criação das sessões das ongs.
     * 
    */
    async create(request, response){
        const { id } = request.body
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()
        if(!ong){
            return response.status(400).json({ error: 'No ONG found with this ID.'})
        }
        return response.json(ong)
    }
}