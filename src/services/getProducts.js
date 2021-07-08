import axios from 'axios'

import { API_BASE_URL } from 'services/constants.js'

const getProducts = async products => {
    const { data } = await axios.get(`${API_BASE_URL}`)
    return data
}

export default getProducts
