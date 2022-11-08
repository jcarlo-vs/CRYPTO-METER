import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { ExchangesContent, Header, Pagination } from '../components'
import { changePage, getExchanges } from '../features/Exchanges/exchangeSlice'

const Exchanges = () => {
	const { pageNum } = useSelector((store) => store.exchange)

	const dispatch = useDispatch()

	const clickPage = (e) => {
		const value = Number(e.target.textContent)
		dispatch(changePage(value))
		dispatch(getExchanges(value))
	}

	const prevNext = (e) => {
		const value = e.target.textContent
		dispatch(changePage(value))
		dispatch(getExchanges(value))
	}
	return (
		<Wrapper>
			<Header content={'CRYPTO EXCHANGES'} />
			<ExchangesContent />
			<Pagination
				clickPage={clickPage}
				prevNext={prevNext}
				pageNum={pageNum}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	height: 100%;
	grid-template-rows: 10% 1fr 10%;
`
export default Exchanges
