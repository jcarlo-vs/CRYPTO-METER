import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch from '../../utils/customFetch'

const initialState = {
	isLoading: true,
	isError: false,
	coins: [],
	searchedCoins: [],
	text: '',
	pageNum: 1,
	singleCryptoInfo: null,
}

export const getCrypto = createAsyncThunk('crypto/getCrypto', async (_, thunkAPI) => {
	try {
		const { data } = await customFetch.get(
			`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${
				thunkAPI.getState().crypto.pageNum
			}&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`
		)
		return data
	} catch (error) {
		thunkAPI.rejectWithValue(error.response.data.msg)
		console.log(error)
	}
})

export const searchCrypto = createAsyncThunk('crypto/searchCrypto', async (coin, thunkAPI) => {
	try {
		const { data } = await customFetch.get(`/search?query=${coin}`)
		return data.coins.slice(0, 10)
	} catch (error) {
		console.log(error)
	}
})

export const getSingleCrypto = createAsyncThunk('crypto/getSingleCrypto', async (id, thunkAPI) => {
	try {
		const { data } = await customFetch.get(
			`/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
		)
		const newData = {
			id: data.id,
			symbol: data.symbol,
			name: data.name,
			description: data.description.en,
			image: data.image.small,
			price: data.market_data.current_price.usd,
			mcap: data.market_data.market_cap.usd,
			rank: data.market_data.market_cap_rank,
			totalVolume: data.market_data.total_volume.usd,
			totalSupply: data.market_data.total_supply,
			maxSupply: data.market_data.max_supply,
			circulatingSupply: data.market_data.circulating_supply,
			fullDilluted: data.market_data.fully_diluted_valuation.usd,
		}

		return newData
	} catch (error) {
		console.log(error)
	}
})

const cryptoSlice = createSlice({
	name: 'crypto',
	initialState,
	reducers: {
		changePage: (state, { payload }) => {
			if (payload === 'NEXT') {
				if (state.pageNum > 10 - 1) {
					state.pageNum = 1
					return
				}
				state.pageNum = state.pageNum + 1
				return
			}
			if (payload === 'PREV') {
				if (state.pageNum < 2) {
					state.pageNum = 10
					return
				}
				state.pageNum = state.pageNum - 1
				return
			}
			state.pageNum = payload
		},
		changeText: (state, { payload }) => {
			state.text = payload
		},
		clearValues: (state) => {
			state.text = ''
		},
	},
	extraReducers: {
		//
		[getCrypto.pending]: (state) => {
			state.isLoading = true
			state.isError = false
		},
		[getCrypto.fulfilled]: (state, { payload }) => {
			state.coins = payload
			state.isLoading = false
			state.isError = false
		},
		[getCrypto.rejected]: (state) => {
			state.isLoading = false
			state.isError = true
		},

		// SEARCH CRYPTO

		[searchCrypto.fulfilled]: (state, { payload }) => {
			state.searchedCoins = payload
			state.isLoading = false
			state.isError = false
		},
		[searchCrypto.rejected]: (state) => {
			state.isLoading = false
			state.isError = true
		},

		// GET SINGLE CRYPTO
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

export default cryptoSlice.reducer
export const { changePage, changeText, clearValues } = cryptoSlice.actions
