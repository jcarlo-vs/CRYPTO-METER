import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import MainContent from '../components/Mainlayouts/MainContent'

import MobileMenubar from '../components/Mainlayouts/MobileMenubar'
import Navbar from '../components/Mainlayouts/Navbar'
import Sidebar from '../components/Mainlayouts/Sidebar'

const SharedLayout = () => {
	return (
		<Wrapper className='container'>
			<Sidebar />
			<MobileMenubar />
			<div className='left-content'>
				<Navbar />
				<MainContent />
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 15% 0 1fr;
	height: 100%;
	/* height: 100vh; */
	/* position: relative; */
	.left-content {
		display: grid;
		grid-template-rows: 10% 1fr;
	}

	@media (max-width: 95em) {
		.side-bar {
			display: none;
		}
		grid-template-columns: 1fr;
	}
`
export default SharedLayout
