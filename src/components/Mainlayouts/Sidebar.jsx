import styled from 'styled-components'

import NavLinks from '../Layouts/NavLinks'

const Sidebar = () => {
	return (
		<Wrapper className='side-bar'>
			<NavLinks />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 10rem;
	height: 100%;
	box-shadow: 1px 0 0 #3333333c;
	display: grid;
	grid-template-rows: max-content auto;
	overflow: hidden;
`
export default Sidebar
