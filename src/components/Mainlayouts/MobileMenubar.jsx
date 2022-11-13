import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { showSidebar } from '../../features/Home/homeSlice'
import NavLinks from '../../components/Layouts/NavLinks'
import { useEffect } from 'react'
const MobileMenubar = () => {
	const { isSidebarOpen } = useSelector((store) => store.home)

	const dispatch = useDispatch()

	const toggleMenu = (e) => {
		dispatch(showSidebar())
	}

	const toggleKey = (e) => {
		if (e.key === 'Escape' && isSidebarOpen) {
			toggleMenu()
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', toggleKey)

		return () => {
			window.removeEventListener('keydown', toggleKey)
		}
	})

	return (
		<MobileMenuWrapper>
			<div className={`mobile-menu ${isSidebarOpen ? 'showMobileMenu' : ''}`}>
				<FaTimes
					className='icon'
					onClick={toggleMenu}
				/>
				<NavLinks mobile={'activate'} />
			</div>
		</MobileMenuWrapper>
	)
}

const MobileMenuWrapper = styled.div`
	.icon {
		font-size: 3rem;
		position: absolute;
		right: 2rem;
		top: 2rem;
	}
	.mobile-menu {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		background-color: white;
		z-index: 100;
		/* opacity: 0; */
		left: 100%;
		transition: all 0.5s ease-in-out;
	}

	.showMobileMenu {
		/* opacity: 1; */
		left: 0%;
	}
`

export default MobileMenubar
