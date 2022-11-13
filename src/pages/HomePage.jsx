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
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
`

export default HomePage
