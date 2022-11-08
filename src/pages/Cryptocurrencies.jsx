import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import CryptocurrencyContent from '../components/Cryptocurrencies/CryptocurrencyContent'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import { changePage, getCrypto } from '../features/Cryptocurrencies/cryptocurrencySlice'

const Cryptocurrencies = () => {
	const { pageNum } = useSelector((store) => store.crypto)
	const dispatch = useDispatch()

	const clickPage = (e) => {
		const value = Number(e.target.textContent)
		dispatch(changePage(value))
		dispatch(getCrypto())
	}

	const prevNext = (e) => {
		const value = e.target.textContent
		dispatch(changePage(value))
		dispatch(getCrypto())
	}

	return (
		<Wrapper>
			<Header content={'CRYPTO CURRENCIES'} />
			<CryptocurrencyContent />
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
export default Cryptocurrencies
