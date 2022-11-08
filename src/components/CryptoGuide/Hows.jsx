import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SingleQuote from './SingleQuote'

const Hows = () => {
	return (
		<Wrapper>
			<h1 className='title'>Articles you can read more about....</h1>
			<SingleQuote
				title={`How To Start Investing In Crypto?`}
				description={`A guide for beginners - 5 steps for investing in cryptocurrency`}
				url={'https://www.bankrate.com/investing/how-to-invest-in-cryptocurrency-beginners-guide/'}
			/>
			<SingleQuote
				title={`A beginner's guide to cryptocurrency`}
				description={`Wharton expert Sarah Hammer breaks down the basics of digital currency, which has exploded in popularity in recent years`}
				url={'https://penntoday.upenn.edu/news/beginners-guide-cryptocurrency'}
			/>

			<SingleQuote
				title={`12 most popular types of cryptocurrency`}
				description={`While Bitcoin may have been the first major cryptocurrency to hit the market – it debuted in 2009 – many others have become highly popular, even if not quite as large as the original.`}
				url={
					'https://www.bankrate.com/investing/types-of-cryptocurrency/?series=introduction-to-cryptocurrency-investing'
				}
			/>
			<SingleQuote
				title={`What are altcoins? A guide to the cryptocurrencies beyond Bitcoin`}
				description={`Bitcoin ushered in the era of cryptocurrency in 2009, and it quickly became the name whenever anyone talked about digital currencies. `}
				url={
					'https://www.bankrate.com/investing/what-are-altcoins/?series=introduction-to-cryptocurrency-investing'
				}
			/>
			<div className='btn-container'>
				<Link
					className='btn btn-link'
					to={'/cryptoguide/readmore'}>
					READ MORE
				</Link>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 1.5rem;
	padding: 1rem 5rem;

	.btn-link {
		text-decoration: none;
		color: var(--primary-1);
		&:hover {
			color: white;
		}
	}
	.title {
		color: var(--primary-1);
		text-decoration: underline;
	}
	.btn-container {
		text-align: center;
		margin-top: 2rem;
	}

	@media (max-width: 1130px) {
		h1 {
			font-size: 1.8rem;
		}
	}

	@media (max-width: 678px) {
		padding: 1rem 2rem;
		h1 {
			font-size: 1.5rem;
		}
		p {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 450px) {
		h1 {
			font-size: 1.2rem;
		}
		p {
			font-size: 1rem;
		}
	}
`
export default Hows
