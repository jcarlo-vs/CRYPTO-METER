import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch from '../../utils/customFetch'
import { toast } from 'react-toastify'
const initialState = {
	isLoading: true,
	isError: false,
	exchanges: [],
	pageNum: 1,
	btcPrice: null,
}

export const getBTCprice = createAsyncThunk('exchange/getBTCprice', async (_, thunkAPI) => {
	try {
		const { data } = await customFetch.get(
			`/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false&precision=2`
		)

		return data.bitcoin.usd
	} catch (error) {
		console.log(error.message)
		thunkAPI.rejectWithValue(error.message)
	}
})

export const getExchanges = createAsyncThunk('exchange/getExchanges', async (_, thunkAPI) => {
	await thunkAPI.dispatch(getBTCprice())
	try {
		const { data } = await customFetch.get(`/exchanges?per_page=10&page=${thunkAPI.getState().exchange.pageNum}`)

		const newData = data.map((item, index) => {
			const newItem = {
				id: item.id,
				image: item.image,
				name: item.name,
				url: item.url,
				trustScore: item.trust_score,
				rank: item.trust_score_rank,
				totalVolume24h: item.trade_volume_24h_btc * thunkAPI.getState().exchange.btcPrice,
				totalVolume24hNormalized: item.trade_volume_24h_btc_normalized * thunkAPI.getState().exchange.btcPrice,
			}

			return newItem
		})

		return newData
	} catch (error) {
		console.log(error)
		thunkAPI.rejectWithValue(error.response.data.msg)
	}
})

const exchangeSlice = createSlice({
	name: 'exchange',
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
	},
	extraReducers: {
		[getExchanges.pending]: (state) => {
			state.isLoading = true
			state.isError = false
		},
		[getExchanges.fulfilled]: (state, { payload }) => {
			state.exchanges = payload
			state.isLoading = false
			state.isError = false
		},
		[getExchanges.rejected]: (state) => {
			state.isLoading = false
			state.isError = true
			toast.error('NETWORK ERROR')
		},

		// GET BTC PRICE
		[getBTCprice.pending]: (state, { payload }) => {
			state.isError = false
			state.isLoading = false
		},
		[getBTCprice.fulfilled]: (state, { payload }) => {
			state.btcPrice = payload
			state.isLoading = false
		},
		[getBTCprice.rejected]: (state, { payload }) => {
			state.isError = true
			state.isLoading = false
			toast.error('NETWORK ERROR')
		},
	},
})

export default exchangeSlice.reducer
export const { changePage } = exchangeSlice.actions
