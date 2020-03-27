/**
 * Arquivo resposável pela integração com serviços externos. 
 * 
*/

import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api