import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import {
	Cryptocurrencies,
	CryptoCalculator,
	CryptoGuide,
	Exchanges,
	HomePage,
	ReadMore,
	SharedLayout,
	SingleCryptoInfo,
} from './pages/index'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<SharedLayout />}>
					<Route
						index
						element={<HomePage />}
					/>

					<Route
						path='cryptocurrencies'
						element={<Cryptocurrencies />}
					/>
					<Route
						path='exchanges'
						element={<Exchanges />}
					/>
					<Route
						path='cryptocalculator'
						element={<CryptoCalculator />}
					/>
					<Route
						path='cryptoguide'
						element={<CryptoGuide />}
					/>
					<Route
						path='cryptocurrencies/:id'
						element={<SingleCryptoInfo />}
					/>
					<Route
						path='/cryptoguide/readmore'
						element={<ReadMore />}
					/>
				</Route>
			</Routes>
			<ToastContainer position='top-center' />
		</>
	)
}

const Wrapper = styled.div``
export default App
