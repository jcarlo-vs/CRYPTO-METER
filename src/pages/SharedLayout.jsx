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
			<div className='right-content'>
				<Sidebar />
			</div>
			<div className='left-content'>
				<Navbar />
				<MainContent />
			</div>
			<MobileMenubar />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;

	.right-content {
		flex: 0.2;
	}
	.left-content {
		flex: 1;
	}

	@media (max-width: 1500px) {
		.right-content {
			display: none;
		}
	}
`
export default SharedLayout
