import styled from 'styled-components'
import CalculatorBox from '../components/CalculatorBox'
import Header from '../components/Header'

const CryptoCalculator = () => {
	return (
		<Wrapper>
			<Header content={'CRYPTO CALCULATOR'} />
			<CalculatorBox />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	height: 100%;
	grid-template-rows: 10% 1fr 10%;
`
export default CryptoCalculator
