import { useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Linkto from './Cryptocurrencies/Linkto'
import InputForm from './InputForm'

const Header = ({ content, id }) => {
	const location = useLocation()

	return (
		<Wrapper content={content}>
			<h1>{content}</h1>
			{location.pathname === '/cryptocurrencies' ? <InputForm /> : ''}
			{location.pathname === `/cryptocurrencies/${id}` && <Linkto path={'/cryptocurrencies'} />}
			{location.pathname === `/cryptoguide/readmore` && <Linkto path={'/cryptoguide'} />}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	color: var(--light-1);
	color: red;
	/* background-color: var(--primary-3); */
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	h1 {
		letter-spacing: 3px;
	}
	@media (max-width: 768px) {
		${({ content }) => {
			return content === 'CRYPTO CURRENCIES'
				? css`
						height: 9rem;
						h1 {
							margin-bottom: 4rem;
						}
				  `
				: css``
		}}
	}
	@media (max-width: 600px) {
		font-size: 0.8rem;
		h1 {
			word-break: break-all;
			word-wrap: break-word;
			width: 25rem;
		}
	}
`
export default Header
