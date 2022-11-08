import styled from 'styled-components'
import ContentLayout from '../ContentLayouts/ContentLayout'

const MainContent = () => {
	return (
		<Wrapper className='container-pad'>
			<ContentLayout />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: var(--light-3);
	height: 90vh;
`
export default MainContent
