import styled from 'styled-components'
import ContentLayout from '../ContentLayouts/ContentLayout'

const MainContent = () => {
	return (
		<Wrapper>
			<ContentLayout />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: var(--light-3);
	padding: 1rem;
	height: 85vh;
`
export default MainContent
