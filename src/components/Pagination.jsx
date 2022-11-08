import styled from 'styled-components'

const Pagination = ({ clickPage, prevNext, pageNum }) => {
	const page = Array.from({ length: 10 }, (_, index) => {
		return index + 1
	})

	return (
		<Wrapper>
			<button
				className='btn'
				onClick={prevNext}>
				PREV
			</button>
			{page.map((item, index) => {
				return (
					<button
						onClick={clickPage}
						className={pageNum === index + 1 ? 'btn activePage' : 'btn'}
						key={index}>
						{item}
					</button>
				)
			})}
			<button
				className='btn'
				onClick={prevNext}>
				NEXT
			</button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 5px;
	padding-top: 1rem;

	@media (max-width: 500px) {
		.btn {
			font-size: 1.3rem;
			padding: 0.5rem;
		}
	}
`
export default Pagination
