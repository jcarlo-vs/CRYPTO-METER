import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContentBox = ({ title, content, url }) => {
	return (
		<Wrapper>
			<Link
				className='link'
				to={url}>
				<h1>{title}</h1>
			</Link>
			<div className='underline'></div>
			<div>{content}</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 2rem;

	height: 30rem;
	display: grid;
	grid-template-rows: auto auto 1fr;

	.underline {
		width: 100%;
		height: 1rem;
		background-color: var(--primary-5);
	}

	.link {
		color: var(--primary-7);
		text-decoration: none;
		&:hover {
			color: var(--secondary-3);
		}
	}
	@media (max-width: 1200px) {
		height: 12rem;

		h1 {
			/* box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1); */
			font-size: 1.3rem;
			margin-top: 1rem;
			padding-top: 0.2rem;
		}
	}
`
export default ContentBox
