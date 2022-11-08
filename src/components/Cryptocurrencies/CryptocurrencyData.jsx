import { useSelector } from 'react-redux'
import styled from 'styled-components'
import TableHead from '../Table/TableHead'
import TableBody from '../Table/TableBody'
import ErrorMessage from '../Layouts/ErrorMessage'
import Loading from '../Layouts/Loading'
import { useEffect } from 'react'
import { useState } from 'react'
const CryptocurrencyData = () => {
	const [size, setSize] = useState(window.innerWidth)

	const { coins, isError, isLoading } = useSelector((store) => store.crypto)
	let cryptocurrencyHeader = ['#', 'Coin', 'Price', '1h', '24h', '24 Volume', 'Mkt Cap']
	let cryptocurrencyHeader2 = ['#', 'Coin', 'Price', '24h', '24 Volume', 'Mkt Cap']
	let cryptocurrencyHeader3 = ['#', 'Coin', 'Price', '24h', 'Mkt Cap']
	const checkWindow = () => {
		setSize(window.innerWidth)
	}
	useEffect(() => {
		window.addEventListener('resize', checkWindow)

		return () => window.removeEventListener('resize', checkWindow)
	})
	const headerReturn = () => {
		if (size > 968) {
			return cryptocurrencyHeader
		}
		if (size <= 968 && size > 768) {
			return cryptocurrencyHeader2
		}
		if (size <= 768) {
			return cryptocurrencyHeader3
		}
	}

	if (isLoading) {
		return <Loading />
	}

	if (isError) {
		return <ErrorMessage />
	}

	return (
		<Wrapper>
			<table>
				<TableHead values={headerReturn()} />
				{coins && (
					<TableBody
						values={coins}
						type={'cryptocurrency'}
					/>
				)}
			</table>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 2rem;
	padding: 1rem 2rem;
	table {
		width: 100%;
		border-collapse: collapse;
		min-width: 550px;
	}
`
export default CryptocurrencyData
