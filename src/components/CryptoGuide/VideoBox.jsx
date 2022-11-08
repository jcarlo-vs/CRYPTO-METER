import styled from 'styled-components'

const VideoBox = ({ videoUrl, title, description }) => {
	return (
		<Wrapper>
			<div className='video-container'>
				<iframe
					width='560'
					height='315'
					src={videoUrl}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen></iframe>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	height: 100%;
	padding: 0;
	iframe {
		width: 100%;
		border-radius: 3rem;
		padding: 1rem;
	}
	.video-container {
		width: 40rem;
		text-align: center;
		height: 100%;
	}
	p {
		font-size: 1.2rem;
	}

	@media (max-width: 79em) {
		.video-container {
			width: 35rem;
		}
	}

	@media (max-width: 1130px) {
		.video-container {
			width: 30rem;
		}
		iframe {
			height: 22rem;
			width: 25rem;
		}
		h2 {
		}
	}

	@media (max-width: 678px) {
		text-align: center;

		.video-container {
			width: 30rem;
			padding: 0 3rem;
		}
		iframe {
			height: 20rem;
			width: 24rem;
		}
		h2 {
			font-size: 1.2rem;
		}
		p {
			font-size: 1rem;
			width: 100%;
			margin: 0 auto;
		}
	}
`

export default VideoBox
