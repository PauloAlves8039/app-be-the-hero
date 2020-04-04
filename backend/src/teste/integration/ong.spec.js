/**
 * Arquivo responsável por realizar teste de integração para testar as funcionalidades das ongs
 * 
 */

const request = require('supertest')
const app = require('../../app')
const connection = require('../../database/connection')

/**
 * Função responsável por testar envio de informaçãoes para cadastro das ongs. 
 * 
*/
describe('ONG', () => {
    
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll( async () => {
        await connection.destroy()
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Ong-Teste",
                email: "teste@teste.com.br",
                whatsapp: "8134480350",
                city: "Recife",
                uf: "PE"
            })
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)       
    })
})