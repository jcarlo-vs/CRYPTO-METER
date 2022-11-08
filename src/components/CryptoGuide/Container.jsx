import styled from 'styled-components'
import VideoBox from './VideoBox'

const Container = () => {
	return (
		<Wrapper>
			<VideoBox
				videoUrl={'https://www.youtube.com/embed/1YyAzVmP9xQ'}
				title={'What is Cryptocurrency ?'}
				description={
					'This video on Cryptocurrency covers all the important concepts from basics to advanced. Also it covers all the information about ...'
				}
			/>
			<VideoBox
				videoUrl={'https://www.youtube.com/embed/SSo_EIwHSd4'}
				title={'What is Blockchain?'}
				description={`  What is a blockchain and how do they work? I'll explain why blockchains are so special in simple and plain English!`}
			/>
			<VideoBox
				videoUrl={'https://www.youtube.com/embed/ZE2HxTmxfrI'}
				title={'What is Smart Contracts?'}
				description={
					'What are smart contracts and what do they have to do with blockchains and cryptocurrencies? '
				}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	place-items: center;

	@media (max-width: 980px) {
		overflow-x: scroll;
		overflow-y: hidden;
	}
`
export default Container
