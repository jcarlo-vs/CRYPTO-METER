import styled from 'styled-components'

const TableHead = ({ values }) => {
	return (
		<TheadWrapper>
			<tr>
				{values.map((item, index) => {
					return <td key={index}>{item}</td>
				})}
			</tr>
		</TheadWrapper>
	)
}
export default TableHead

const TheadWrapper = styled.thead`
	font-weight: bold;
	font-size: 1.5rem;

	td {
		padding: 2rem 0;
		max-width: 5rem;
	}
	tr {
		height: 4rem;
		text-align: center;
	}

	@media (max-width: 768px) {
		font-size: 1.3rem;
	}

	@media (max-width: 678px) {
		/* font-size: 1rem; */
	}
`
