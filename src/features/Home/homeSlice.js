import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch from '../../utils/customFetch'
import { getBTCprice } from '../Exchanges/exchangeSlice'

const initialState = {
	isLoading: false,
	isError: false,
	trendingCoins: [],
	topCrypto: [],
	topExchanges: [],
	isSidebarOpen: false,
}

export const getTrendingCoins = createAsyncThunk('home/getTrendingCoins', async (_, thunkAPI) => {
	try {
		await thunkAPI.dispatch(getBTCprice())

		const { data } = await customFetch.get(`/search/trending`)

		const newData = data.coins.map((item, index) => {
			const newItem = {
				name: item.item.name,
				image: item.item.small,
				priceBTC: item.item.price_btc * thunkAPI.getState().exchange.btcPrice || 1,
				symbol: item.item.symbol,
				rank: item.item.market_cap_rank,
			}

			return newItem
		})

		return newData
	} catch (error) {
		console.log(error.response.data.msg)
	}
})

export const getTopCrypto = createAsyncThunk('home/getCrypto', async (_, thunkAPI) => {
	try {
		const { data } = await customFetch.get(
			`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`
		)
		const newData = data.map((item, index) => {
			const newItem = {
				name: item.name,
				image: item.image,
				priceBTC: item.current_price,
				symbol: item.symbol,
				rank: item.market_cap_rank,
			}

			return newItem
		})
		return newData
	} catch (error) {
		console.log(error)
	}
})

export const getTopExchanges = createAsyncThunk('home/getExchanges', async (_, thunkAPI) => {
	try {
		await thunkAPI.dispatch(getBTCprice())

		const { data } = await customFetch.get(`/exchanges?per_page=10&page=1`)

		const newData = data.map((item, index) => {
			const newItem = {
				name: item.name,
				image: item.image,
				priceBTC: item.trade_volume_24h_btc * thunkAPI.getState().exchange.btcPrice,
				symbol: item.id.toUpperCase(),
				rank: item.trust_score_rank,
			}

			return newItem
		})

		return newData
	} catch (error) {
		console.log(error)
	}
})
const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		showSidebar: (state) => {
			state.isSidebarOpen = !state.isSidebarOpen
		},
	},

	extraReducers: {
		[getTrendingCoins.pending]: (state) => {
			state.isLoading = true
			state.isError = false
		},
		[getTrendingCoins.fulfilled]: (state, { payload }) => {
			state.trendingCoins = payload
			state.isLoading = false
			state.isError = false
		},
		[getTrendingCoins.rejected]: (state) => {
			state.isLoading = false
			state.isError = true
		},

		// TOp Crypto
		[getTopCrypto.pending]: (state) => {
			state.isLoading = true
			state.isError = false
		},
		[getTopCrypto.fulfilled]: (state, { payload }) => {
			state.topCrypto = payload
			state.isLoading = false
			state.isError = false
		},
		[getTopCrypto.rejected]: (state) => {
			state.isLoading = false
			state.isError = true
		},

		// top exchanges
		[getTopExchanges.pending]: (state) => {
			state.isLoading = true
			state.isError = false
		},
		[getTopExchanges.fulfilled]: (state, { payload }) => {
			state.topExchanges = payload
			state.isLoading = false
			state.isError = false
		},
		[getTopExchanges.rejected]: (state) => {
			state.isLoading = false
			state.isError = true
		},
	},
})

export const { showSidebar } = homeSlice.actions
export default homeSlice.reducer
