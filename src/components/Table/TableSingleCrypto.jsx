import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getSingleCrypto } from '../../features/Cryptocurrencies/cryptocurrencySlice'
import { formatPrice, numberFormat } from '../../utils/index'
import { Loading, ErrorMessage } from '../../components'

const TableSingleCrypto = () => {
	const { isLoading, isError, singleCryptoInfo } = useSelector((store) => store.crypto)

	const { id } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getSingleCrypto(id))
	}, [])

	if (isLoading) {
		return <Loading />
	}

	if (isError) {
		return <ErrorMessage />
	}

	return (
		<Wrapper>
			{singleCryptoInfo && (
				<>
					<div className='info-container'>
						<header>
							<p className='rank'>#{singleCryptoInfo.rank}</p>
							<div className='image-name'>
								<img
									className='img'
									src={singleCryptoInfo.image}
									alt=''
								/>
							</div>
							<p className='crypto-name'>{singleCryptoInfo.name}</p>
						</header>
						{/* BODY */}
						<div className='price-container'>
							<p>{formatPrice(singleCryptoInfo.price)}</p>
						</div>
						<section>
							{/* 1 */}
							<article>
								<div>
									<p>Market Cap</p>
									<p>{singleCryptoInfo.mcap ? formatPrice(singleCryptoInfo.mcap) : '----'}</p>
								</div>
								<div>
									<p>Circulating Supply</p>
									<p>
										{singleCryptoInfo.circulatingSupply
											? numberFormat(singleCryptoInfo.circulatingSupply)
											: '----'}
									</p>
								</div>
							</article>
							{/* 2 */}
							<article>
								<div>
									<p>24h Trading Volume</p>
									<p>
										{singleCryptoInfo.totalVolume
											? formatPrice(singleCryptoInfo.totalVolume)
											: '----'}
									</p>
								</div>
								<div>
									<p>Total Supply</p>
									<p>
										{singleCryptoInfo.totalSupply
											? numberFormat(singleCryptoInfo.totalSupply)
											: '---'}
									</p>
								</div>
							</article>
							{/* 3 */}
							<article>
								<div>
									<p>Fully Dilluted</p>
									<p>
										{singleCryptoInfo.fullDilluted
											? numberFormat(singleCryptoInfo.fullDilluted)
											: '---'}
									</p>
								</div>
								<div>
									<p>Max Supply</p>
									<p>
										{singleCryptoInfo.maxSupply ? numberFormat(singleCryptoInfo.maxSupply) : '---'}
									</p>
								</div>
							</article>
						</section>
						<footer>
							<p dangerouslySetInnerHTML={{ __html: singleCryptoInfo.description || '---' }} />
						</footer>
					</div>
				</>
			)}
		</Wrapper>
	)
}
export default TableSingleCrypto

const Wrapper = styled.div`
	/* HEADER */
	.info-container {
		max-width: 100rem;
		margin: 2rem auto;
		text-align: center;
		font-size: 2rem;
	}
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		margin-bottom: 1rem;
	}
	.crypto-name {
		flex: 1;
	}
	.image-name {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		/* gap: 3rem; */
		/* height: 5rem; */
	}
	.img {
		width: 4rem;
	}
	.rank {
		font-size: 3rem;
		font-weight: bold;
		flex: 1;
	}
	/* PRICE */
	.price-container {
		font-size: 3rem;
		font-weight: bold;
		color: var(--primary-5);
	}

	/* SECTION */
	article {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 5rem;
		div {
			margin-top: 1rem;
			border-bottom: 1px solid #55555545;
			p:first-child {
				color: var(--primary-5);
				font-weight: bold;
				margin-bottom: 1rem;
			}
		}
	}

	footer {
		box-shadow: 0 0 0 1px #33333334;
		width: 100%;
		margin: 2rem auto;
		height: 20rem;
		overflow-y: scroll;
		text-align: justify;
		padding: 2rem;
	}

	@media (max-width: 680px) {
		article,
		footer {
			gap: 0;
			flex-direction: column;
			font-size: 1.5rem;
		}
		.rank,
		.price-container,
		.crypto-name {
			font-size: 2rem;
		}
	}

	@media (max-width: 480px) {
		article,
		footer {
			grid-template-columns: 1fr;
		}
		footer {
			max-height: 15rem;
		}
	}

	@media (max-height: 790px) {
		.rank,
		.price-container,
		.crypto-name {
			font-size: 1.2rem;
		}

		p {
			font-size: 1rem;
		}

		footer {
			max-height: 10rem;
			padding: 0.5;
		}
	}
`
