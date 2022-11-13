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
			<div className='underlined'></div>
			<div>{content}</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	overflow-y: scroll;
	border: solid 1px var(--primary-7);
	.underlined {
		width: 100%;
		height: 1rem;
		border: solid 5px var(--primary-5);

		.link {
			color: var(--primary-7);
			text-decoration: none;
		}
		padding: 0;
		&:hover {
			color: var(--secondary-3);
		}
	}
	.link h1 {
		font-size: 1.8rem;
		text-align: center;
	}
	@media (max-width: 1050px) {
		.link h1 {
			font-size: 1.5rem;
			text-align: center;
		}
	}
`
export default ContentBox
