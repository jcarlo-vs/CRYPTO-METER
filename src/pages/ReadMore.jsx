import styled from 'styled-components'
import { Header, SingleQuote } from '../components'

const ReadMore = () => {
	return (
		<Wrapper>
			<Header content={'Articles Today'} />
			<article className='article'>
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
				<SingleQuote
					title={`What is Bitcoin?`}
					description={`Bitcoin is one kind of digital currency or cryptocurrency, a medium of exchange that exists exclusively online.`}
					url={
						'https://www.bankrate.com/investing/what-is-bitcoin/?series=introduction-to-cryptocurrency-investing'
					}
				/>
				<SingleQuote
					title={`Cryptocurrency taxes: A guide to tax rules for Bitcoin, Ethereum and more..`}
					description={`With the staggering rise and fall of some cryptocurrencies such as Bitcoin and Ethereum, crypto traders may have serious tax questions on their minds.`}
					url={
						'https://www.bankrate.com/investing/crypto-taxes-guide-bitcoin-ethereum/?series=introduction-to-cryptocurrency-investing'
					}
				/>
				<SingleQuote
					title={`What is Bitcoin mining and how does it work?`}
					description={`Bitcoin mining is the process of creating new bitcoins by solving extremely complicated math problems that verify transactions in the currency.`}
					url={
						'https://www.bankrate.com/investing/what-is-bitcoin-mining/?series=introduction-to-cryptocurrency-investing'
					}
				/>
				<SingleQuote
					title={`Best online brokers for buying and selling cryptocurrency in 2022`}
					description={`Cryptocurrency, especially Bitcoin, has proven to be a popular trading vehicle, even if legendary investors such as Warren Buffett think it’s as good as worthless. `}
					url={
						'https://www.bankrate.com/investing/what-is-bitcoin-mining/?series=introduction-to-cryptocurrency-investing'
					}
				/>
				<SingleQuote
					title={`Cryptocurrency Mining 101`}
					description={`so in this article, we won’t be discussing difficult technical concepts and definitions like hashes, sha256, mathematical proofs, and back-linked lists.`}
					url={'https://www.cryptovantage.com/guides/cryptocurrency-mining-101/'}
				/>
				{/*  */}
				<SingleQuote
					title={`What is a Cryptocurrency Airdrop? How Do I Earn Them?`}
					description={`To participate in an airdrop, users and investors may need to purchase a pre-existing cryptocurrency and deposit it with an exchange or wallet.`}
					url={'https://www.cryptovantage.com/guides/what-is-a-cryptocurrency-airdrop/'}
				/>
				<SingleQuote
					title={`Public vs Private cryptocurrency keys`}
					description={`While bitcoin and other cryptocurrencies have generated a large amount of excitement around a variety of financial and technical topics`}
					url={'https://www.cryptovantage.com/guides/public-vs-private-cryptocurrency-keys/'}
				/>
				<SingleQuote
					title={`What's a Crypto Paper Wallet?`}
					description={`Hot storage, cold storage, hardware wallets, software wallets, custodial and non-custodial. These are all terms related to cryptocurrency wallets and storage`}
					url={'https://www.cryptovantage.com/guides/whats-a-crypto-paper-wallet/'}
				/>
				<SingleQuote
					title={`What is Crypto FUD?`}
					description={`Fear,Uncertainty and Doubt? `}
					url={'https://www.cryptovantage.com/guides/what-is-crypto-fud-fear-uncertainty-and-doubt/'}
				/>
				<SingleQuote
					title={`How to Buy Bitcoin Anonymously with Cash`}
					description={`If you’re looking to buy Bitcoin with cash or without having to go through identity verification, you’re actually fairly restricted in your options.`}
					url={'https://www.cryptovantage.com/guides/how-to-buy-bitcoin-anonymously-with-cash/'}
				/>
			</article>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 10% 1fr;
	height: 100%;
	.title {
		text-decoration: underline;
	}

	.article {
		overflow-y: scroll;
		padding: 0 2rem;
	}
`
export default ReadMore
