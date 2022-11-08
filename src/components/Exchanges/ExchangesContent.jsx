import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getExchanges } from '../../features/Exchanges/exchangeSlice'
import ExchangesData from './ExchangesData'

const ExchangesContent = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getExchanges())
	}, [])

	return (
		<Wrapper>
			<ExchangesData />
		</Wrapper>
	)
}
const Wrapper = styled.div`
	box-shadow: 0 0 3px #3333335d;
	overflow-y: scroll;
`
export default ExchangesContent
