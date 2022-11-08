import styled from 'styled-components'

const ErrorMessage = () => {
	return (
		<Wrapper className='center'>
			<h1>RATE LIMIT EXCEEDED, Please try again later.</h1>
		</Wrapper>
	)
}
export default ErrorMessage

const Wrapper = styled.div`
	h1 {
		font-size: 1rem;
		text-align: center;
	}
`
