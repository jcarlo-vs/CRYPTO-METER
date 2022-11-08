import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Header, TableSingleCrypto } from '../components'

const SingleCryptoInfo = () => {
	const { id } = useParams()

	return (
		<Wrapper>
			<Header
				content={id.toUpperCase()}
				id={id}
			/>
			<TableSingleCrypto />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	height: 100%;
	grid-template-rows: 10% 1fr;
`
export default SingleCryptoInfo
