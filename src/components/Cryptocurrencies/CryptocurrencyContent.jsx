import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getCrypto } from '../../features/Cryptocurrencies/cryptocurrencySlice'
import CryptocurrencyData from './CryptocurrencyData'

const CryptocurrencyContent = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCrypto())
	}, [])

	return (
		<Wrapper>
			<CryptocurrencyData />
		</Wrapper>
	)
}
const Wrapper = styled.div`
	box-shadow: 0 0 3px #3333335d;
	overflow-y: scroll;
`
export default CryptocurrencyContent
