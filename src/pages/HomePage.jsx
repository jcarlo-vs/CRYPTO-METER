import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Container from '../components/HomePage/Container'
import MidContainer from '../components/HomePage/MidContainer'
import { getBTCprice } from '../features/Exchanges/exchangeSlice'

const HomePage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getBTCprice())
	}, [])

	return (
		<Wrapper>
			<MidContainer />
			<Container />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr 0.3fr;
	height: 100%;
	/* border: solid 2px violet; */
	/* overflow: hidden; */
	@media (max-width: 1200px) {
		grid-template-rows: 22% 1fr;
	}
`

export default HomePage
