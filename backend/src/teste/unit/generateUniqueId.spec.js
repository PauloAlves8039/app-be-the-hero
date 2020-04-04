/**
 * Arquivo responsável pela realização de testes unitários para generateUniqueId. 
 * 
*/

const generateUniqueId = require('../../utils/generateUniqueId')

/**
 * Função responsável por testar a função generateUniqueId. 
 * 
*/
describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId()
        expect(id).toHaveLength(8)
    })
})