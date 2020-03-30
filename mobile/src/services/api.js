/**
 * Arquivo resposável pela integração com serviços externos. 
 * 
*/

import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.2.122:3333'
})

export default api

