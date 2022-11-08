import styled from 'styled-components'

const SingleQuote = ({ title, description, url }) => {
	return (
		<Wrapper>
			<section>
				<a
					href={url}
					target='_blank'>
					<h1>{title}</h1>
					<p> {description}</p>
				</a>
			</section>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 0.5rem;
	box-shadow: 0 1px 0 #333;
	section {
	}
	h1 {
	}
	a:link,
	a:visited {
		display: grid;
		align-items: center;
		grid-template-columns: 40% 1fr;
		text-decoration: none;
		column-gap: 2rem;
		color: var(--primary-3);
		&:hover {
			color: var(--secondary-6);
		}
	}
	p {
		font-size: 1.5rem;
		color: #333;
	}

	@media (max-width: 500px) {
		h1 {
			font-size: 1.5rem;
		}
	}
`
export default SingleQuote
