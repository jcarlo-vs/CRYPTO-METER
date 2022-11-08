import { configureStore } from '@reduxjs/toolkit'
import CryptoReducer from '../features/Cryptocurrencies/cryptocurrencySlice'
import ExchangeReducer from '../features/Exchanges/exchangeSlice'
import CalculatorReducer from '../features/Calculator/calculatorSlice'
import calculatorSlice from '../features/Calculator/calculatorSlice'
import HomeReducer from '../features/Home/homeSlice'
export const store = configureStore({
	reducer: {
		crypto: CryptoReducer,
		exchange: ExchangeReducer,
		calculator: calculatorSlice,
		home: HomeReducer,
	},
})
