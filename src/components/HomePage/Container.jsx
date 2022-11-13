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
			<div className='box-container'>
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
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	height: 100%;
	margin-top: 1rem;
	flex: 0.5;
	overflow: hidden;
	.box-container {
		display: flex;
		justify-content: center;
		flex: 0.5;
		animation: slideup 1s linear backwards;
		height: 100%;
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

	@media (max-width: 850px) {
		flex: 1;
		justify-content: stretch;
		.box-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			width: 100%;
			height: 100%;
			/* border: solid 2px red; */
			& > * {
				max-height: 100%;
			}

			& > *:nth-child(1) {
				grid-column: 2;
				grid-row: 1;
				height: 100%;
			}

			& > *:nth-child(2) {
				grid-column: 1;
				grid-row: 1 / span 2;
				height: 100%;
			}
			& > *:nth-child(3) {
				grid-column: 2;
				grid-row: 2;
				height: 100%;
			}
		}
	}

	@media (max-width: 600px) {
		.box-container {
			display: flex;
			flex-direction: column;
		}
	}
`
export default Container
