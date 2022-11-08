import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Loading, ErrorMessage, TableHead, TableBody } from '../../components'

const ExchangesData = (props) => {
	const [size, setSize] = useState(window.innerWidth)
	const { exchanges, isError, isLoading } = useSelector((store) => store.exchange)
	const exchangeHeader = ['#', 'Exchange', 'Trust Score', '24 Volume(Normalized)', '24h Volume']
	const exchangeHeader2 = ['#', 'Exchange', 'Trust Score', , '24h Volume']

	const resize = () => {
		setSize(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', resize)

		return () => window.removeEventListener('resize', resize)
	})
	const headerReturn = () => {
		if (size <= 768) {
			return exchangeHeader2
		}
		if (size > 768) {
			return exchangeHeader
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
				{exchanges && (
					<TableBody
						values={exchanges}
						type={'exchange'}
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
		border-collapse: collapse;
		width: 100%;
		min-width: 550px;
	}
`
export default ExchangesData
