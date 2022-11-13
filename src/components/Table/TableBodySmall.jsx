import styled from 'styled-components'
import formatPrice from '../../utils/formatPrice'

const TableBodySmall = ({ value, exchange }) => {
	return (
		<TableBodyWrapper>
			<div className='table-container'>
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
			</div>
		</TableBodyWrapper>
	)
}
export default TableBodySmall

const TableBodyWrapper = styled.div`
	width: 100%;
	height: 100%;
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
`
