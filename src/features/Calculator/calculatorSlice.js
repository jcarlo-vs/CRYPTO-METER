import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch from '../../utils/customFetch'

const initialState = {
	isLoading: true,
	isError: false,
	coin: null,
	text: '',
	singleCryptoInfo: null,
	currency: 'usd',
}

export const searchCrypto = createAsyncThunk('calculator/searchCrypto', async (coin, thunkAPI) => {
	try {
		const { data } = await customFetch.get(`/search?query=${coin}`)
		console.log(coin)
		return data.coins.slice(0, 10)
	} catch (error) {
		console.log(error)
	}
})

export const getSingleCrypto = createAsyncThunk('calculator/getSingleCrypto', async (id, thunkAPI) => {
	try {
		const { data } = await customFetch.get(
			`/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
		)

		const newData = {
			id: data.id,
			name: data.name,
			image: data.image.small,
			price: data.market_data.current_price.usd,
			symbol: data.symbol,
			globalPrice: data.market_data.current_price,
			globalCurrencies: Object.keys(data.market_data.current_price),
		}

		const newObj = Object.keys(newData.globalPrice)

		return newData
	} catch (error) {
		console.log(error)
	}
})

const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		changeText: (state, { payload }) => {
			state.text = payload
		},
		clearvalues: (state) => {
			state.text = ''
		},
	},
	extraReducers: {
		[searchCrypto.pending]: (state) => {
			state.isError = false
			state.isLoading = true
		},
		[searchCrypto.fulfilled]: (state, { payload }) => {
			state.coins = payload
		},
		[searchCrypto.pending]: (state) => {
			state.isError = true
			state.isLoading = false
		},
		//get single crypto info
		[getSingleCrypto.pending]: (state) => {
			state.isLoading = true
			state.isError = false
		},

		[getSingleCrypto.fulfilled]: (state, { payload }) => {
			state.singleCryptoInfo = payload
			state.isLoading = false
			state.isError = false
		},
		[getSingleCrypto.rejected]: (state) => {
			state.isLoading = false
			state.isError = true
		},
	},
})

export default calculatorSlice.reducer
export const { changeText, clearvalues } = calculatorSlice.actions
