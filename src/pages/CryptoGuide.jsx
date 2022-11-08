import styled from 'styled-components'
import Container from '../components/CryptoGuide/Container'
import Hows from '../components/CryptoGuide/Hows'
import Header from '../components/Header'

const CryptoGuide = () => {
	return (
		<Wrapper>
			<Header content={'CRYPTO GUIDE'} />
			<div className='bottom'>
				<Container />
				<Hows />
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	height: 100%;
	grid-template-rows: 10% 1fr;
	box-shadow: 0 0 2px #3333337b;

	.bottom {
		overflow-y: scroll;
	}
`
export default CryptoGuide
