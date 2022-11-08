import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const ContentLayout = () => {
	return (
		<Wrapper>
			<Outlet />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	border-radius: 1rem;
	box-shadow: 0 0 1rem #333;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	background-color: white;
	padding: 2rem;
`
export default ContentLayout
