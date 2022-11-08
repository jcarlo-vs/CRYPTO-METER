import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { formatPrice } from '../../utils'

const TableBody = ({ values, type }) => {
	const navigate = useNavigate()
	return (
		<TBodyWrapper>
			{type === 'exchange'
				? values.map((item, index) => {
						const { id, image, name, rank, totalVolume24h, totalVolume24hNormalized, trustScore, url } =
							item

						return (
							<tr key={index}>
								<td className='rank'>{rank}</td>
								<td className='flex'>
									<img
										className='img'
										src={image}
										alt={name}
									/>{' '}
									<a
										href={url}
										target='_blank'>
										{name}
									</a>
								</td>
								<td>
									<div className='trust-container flex'>
										<div
											className='trustBar'
											style={{ borderLeft: `${trustScore}rem solid green` }}></div>
										<p>{trustScore}</p>
									</div>
								</td>
								<td className='normalized24hVolume'>
									{totalVolume24hNormalized ? formatPrice(totalVolume24hNormalized) : '---'}
								</td>
								<td>{totalVolume24h ? formatPrice(totalVolume24h) : '---'}</td>
							</tr>
						)
				  })
				: values.map((item, index) => {
						const {
							id,
							name,
							symbol,
							image,
							current_price: price,
							market_cap: mcap,
							market_cap_rank: rank,
							total_volume,
							price_change_percentage_24h: price24hChange,
							price_change_percentage_1h_in_currency: price1hChange,
							price_change_percentage_7d_in_currency: price7dChange,
						} = item

						return (
							<tr
								key={id}
								onClick={() => navigate(`/cryptocurrencies/${id}`)}>
								<td>
									<p>{rank}</p>
								</td>
								<td className='flex'>
									<img
										className='img'
										src={image}
										alt={name}
									/>
									<p>{name}</p>
								</td>
								<td>{formatPrice(price)}</td>
								<td className={price1hChange < 1 ? 'negative' : 'positive'}>
									{price1hChange ? price1hChange.toFixed(2) : '---'}%
								</td>
								<td className={`price24 ${price1hChange < 1 ? 'negative' : 'positive'}`}>
									{price24hChange ? price24hChange.toFixed(2) : '---'}%
								</td>
								<td className='total-volume'>{total_volume ? formatPrice(total_volume) : '---'}</td>
								<td>{mcap ? formatPrice(mcap) : '---'}</td>
							</tr>
						)
				  })}
		</TBodyWrapper>
	)
}
export default TableBody

const TBodyWrapper = styled.tbody`
	td {
		padding: 2rem 0;
		width: max-content;
		max-width: 5rem;
	}
	tr {
		height: 4rem;
		text-align: center;
	}
	& tr {
		font-size: 1.3rem;
		box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
		&:hover {
			background-color: #8080801d;
			cursor: pointer;
		}
	}
	.flex {
		gap: 3rem;
	}
	.positive {
		color: green;
	}
	.negative {
		color: red;
	}
	.trustBar {
		height: 1rem;
		width: 10rem;
		box-shadow: 0 0 0 1px black;
	}
	.trust-container {
		justify-content: center;
	}
	@media (max-width: 968px) {
		.price24 {
			display: none;
		}
	}

	@media (max-width: 768px) {
		.total-volume {
			display: none;
		}

		.normalized24hVolume {
			display: none;
		}
	}

	@media (max-width: 678px) {
		td {
			font-size: 1.2rem;
		}
		.img {
			width: 2.5rem;
		}
	}

	@media (max-width: 550px) {
	}
`
