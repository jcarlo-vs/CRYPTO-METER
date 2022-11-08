import styled from 'styled-components'
import { Link } from 'react-router-dom'
const SingleCryptoHeader = ({ content }) => {
	return (
		<Wrapper>
			<Link
				to={'/cryptocurrencies'}
				className='list'>
				<h1>BACK TO LISTS</h1>
			</Link>
			<h1 className='content'>{content}</h1>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	color: var(--light-1);
	display: grid;
	grid-template-columns: 20% 1fr;
	align-items: center;
	background-color: var(--primary-7);

	.content {
		/* padding-left: 30rem; */

		font-size: 3rem;
		color: white;
	}
	.list {
		color: white;
		flex: 0.2;
		text-decoration: none;
		h1 {
			box-shadow: 0 0 0 2px white;
			text-align: center;
			padding: 1rem;
			cursor: pointer;
			border-radius: 1rem;
			&:hover {
				background-color: white;
				color: var(--primary-7);
			}
		}
		padding: 1rem 3rem;
	}
`
export default SingleCryptoHeader
