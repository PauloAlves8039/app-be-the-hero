/**
 * Arquivo responsável por conter funções de utilidades.
 * 
*/

const crypto = require('crypto')

/**
 * Função para gerar id único na criação da ong. 
 * 
*/
module.exports =  function generateUniqueId(){
    return crypto.randomBytes(4).toString('HEX')
}