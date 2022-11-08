import axios from 'axios'

const customFetch = axios.create({
	baseURL: 'https://api.coingecko.com/api/v3',
})

export default customFetch
