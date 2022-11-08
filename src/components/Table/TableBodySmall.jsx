import styled from 'styled-components'
import formatPrice from '../../utils/formatPrice'

const TableBodySmall = ({ value, exchange }) => {
	return (
		<TableBodyWrapper>
			<table>
				<tbody>
					{value.map((item, index) => {
						const { image, name, priceBTC, rank, symbol } = item

						return (
							<tr key={index}>
								<td className='rank'>{rank}</td>

								<td>
									<div className='flex'>
										<img
											className='img'
											src={image}
											alt=''
										/>
										<p>{name}</p>
									</div>
								</td>

								{!exchange && <td className='symbol'>{symbol.toUpperCase()}</td>}
								<td>{formatPrice(priceBTC)}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</TableBodyWrapper>
	)
}
export default TableBodySmall

const TableBodyWrapper = styled.div`
	width: 100%;
	height: 15rem;
	overflow-y: scroll;
	table {
		border-collapse: collapse;
		width: 100%;
	}
	.img {
		width: 3rem;
	}

	td {
		width: 4rem;
		max-width: 20rem;
		height: 5rem;

		text-align: center;
		padding: 1rem 0;
	}
	tr {
		/* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
	}

	.flex {
		gap: 1rem;
	}

	@media (max-width: 1200px) {
		height: 10rem;
		.symbol {
			/* display: none; */
		}
		tbody {
			display: grid;
			grid-template-columns: 1fr 1fr;
			justify-items: center;
			width: 100%;
			height: 80%;
			padding: 1rem;
			td {
				width: 10rem;
			}
		}
	}

	@media (max-width: 980px) {
		.symbol {
			display: none;
		}
		.flex {
			width: 2rem;
		}
	}
	@media (max-width: 678px) {
		tbody {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 420px) {
		.rank {
			width: 2rem;
		}
		.img {
			width: 2rem;
		}
	}

	@media (max-height: 730px) {
		padding: 0;
		margin: 0;
		height: 7rem;
		td {
			height: 1rem;
			margin: 0;
			padding: 0.5rem;
		}
	}
`
