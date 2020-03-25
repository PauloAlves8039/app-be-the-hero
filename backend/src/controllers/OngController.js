/**
 * Controlador responsável pela regra de negócio da entidade ongs. 
 * 
*/

const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    
    /**
     * Função responsável pela listagem de todos os registros das ongs. 
     * 
    */
    async index (request, response) {
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },
    
    /**
     * Função responsável pela criação de registros das ongs. 
     * 
    */
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body
        const id = crypto.randomBytes(4).toString('HEX')
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id })
    }
}