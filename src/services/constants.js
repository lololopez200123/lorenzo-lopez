import { DATA } from 'data.js'

function getServerHost () {
    const apiUrl = 'https://mocki.io/v1/dd3d229f-7f6c-47b3-a94e-b59f780e3d17'
    if (apiUrl != null) {
        return apiUrl
    } else {
        return DATA
    }
}
// URLs
export const SERVER_HOST = getServerHost()

export const API_BASE_URL = `${SERVER_HOST}`
