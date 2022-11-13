import styled from 'styled-components'
import bg from '../../meterbg.jpg'
const MidContainer = () => {
	return (
		<Wrapper>
			<div className='top'>
				<h1 className='future'>Start the future...</h1>
				<h1 className='highlight-text'>THE MOST SIMPLISTIC CRYPTO LIBRARY</h1>
			</div>
			<div className='bottom'>
				<h2>BEGINNER'S FRIENDLY</h2>
				<h2>EASY TO FOLLOW</h2>
				<h2>UPDATED MATERIALS</h2>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-image: url(${bg});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 1.3rem;
	flex: 1;
	.bottom {
		display: flex;
		gap: 1rem;
		margin-top: auto;
		margin-bottom: 3rem;
	}
	h1 {
		color: #ffffff;
		border: solid 1px #8d99cad7;
		width: max-content;
		padding: 3rem;
		outline: none;
		backdrop-filter: blur(1rem);
		transition: all 0.3s;
		animation: slider 1.2s linear;
		letter-spacing: 2px;
		margin-top: auto;
		&:hover {
			background-color: var(--light-1);
			color: var(--primary-2);
			border: none;
		}
		border-radius: 1.3rem;
		text-align: center;
	}
	.future {
		animation: fromup 2s linear;
		border-radius: 1.3rem;
	}

	@keyframes fromup {
		0% {
			opacity: 0;
			transform: translateY(-1000px);
		}
		50% {
			opacity: 0.5;
			transform: translateY(50px);
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes slider {
		0% {
			opacity: 0;
			transform: translateX(-1000px);
		}
		50% {
			opacity: 0.5;
			transform: translateX(50px);
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes slider2 {
		0% {
			opacity: 0;
			transform: translateX(1000px);
		}
		50% {
			opacity: 0.5;
			transform: translateX(-50px);
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	.active {
		opacity: 1;
	}
	h2 {
		letter-spacing: 2px;
		color: var(--light-1);
		font-weight: 400;
		border: solid 1px white;
		width: max-content;
		padding: 1rem 2rem;
		animation: slider2 0.8s linear;
		border-radius: 1.3rem;
		backdrop-filter: blur(10px);
		&:hover {
			background-color: var(--light-1);
			color: var(--primary-2);
		}
	}

	.top {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 5rem;
	}

	@media (max-width: 850px) {
		flex: 0.2;
		.future {
			font-size: 1.3rem;
			padding: 1rem;
		}
		.highlight-text {
			padding: 1rem;
		}

		.bottom h2 {
			font-size: 1rem;
			padding: 0.5rem;
		}
		.top {
			margin-top: 4rem;
		}
	}

	@media (max-width: 600px) {
		.future {
			font-size: 1rem;
		}
		.highlight-text {
			font-size: 1.3rem;
		}
		.bottom h2 {
			font-size: 0.75rem;
		}
		.top {
			margin-top: 3rem;
		}
	}

	@media (max-width: 500px) {
		.future {
			padding: 0.5rem;
		}
		.highlight-text {
			font-size: 1rem;
			padding: 0.5rem;
		}
		.bottom h2 {
			border: none;
			padding: 0;
		}
		.bottom {
			display: flex;
			flex-direction: column;
			overflow: hidden;
		}
		.top {
			margin-top: 1rem;
		}
	}
`
export default MidContainer
