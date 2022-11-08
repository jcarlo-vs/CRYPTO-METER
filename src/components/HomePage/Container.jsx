import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getTopCrypto, getTopExchanges, getTrendingCoins } from '../../features/Home/homeSlice'
import ErrorMessage from '../Layouts/ErrorMessage'
import Loading from '../Layouts/Loading'
import TableBodySmall from '../Table/TableBodySmall'
import ContentBox from './ContentBox'

const Container = () => {
	const { trendingCoins, topCrypto, topExchanges, isLoading, isError } = useSelector((store) => store.home)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTrendingCoins())
		dispatch(getTopCrypto())
		dispatch(getTopExchanges())
	}, [])

	if (isLoading) {
		return <Loading />
	}

	if (isError) {
		return <ErrorMessage />
	}
	return (
		<Wrapper>
			{topExchanges && topCrypto && trendingCoins && (
				<>
					<ContentBox
						title={'🔥 Top Trending Coins'}
						content={<TableBodySmall value={trendingCoins} />}
						url={'/cryptocurrencies'}
					/>
					<ContentBox
						title={'🏆Top Crypto by Marketcap'}
						content={<TableBodySmall value={topCrypto} />}
						url={'/cryptocurrencies'}
					/>
					<ContentBox
						title={'📊Most Trusted Exchanges'}
						content={
							<TableBodySmall
								value={topExchanges}
								exchange
							/>
						}
						url='/exchanges'
					/>
				</>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	height: 100%;
	/* border: solid 2px red; */
	animation: slideup 1s linear backwards;
	@media (max-width: 1200px) {
		h1 {
			font-size: 1.3rem;
			text-align: center;
		}
		grid-template-columns: 1fr;
	}

	@keyframes slideup {
		0% {
			opacity: 1;
			transform: translateY(1000px);
		}
		50% {
			opacity: 0.5;
			transform: translateY(-20px);
		}
		10% {
			opacity: 1;
			transform: translateY(0);
		}
	}
`
export default Container
