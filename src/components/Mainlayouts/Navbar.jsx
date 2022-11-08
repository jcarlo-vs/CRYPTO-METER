import styled from 'styled-components'
import meterLogo from '../../assets/logos/cryptoMeter-Logo.png'
import Navmenu from './Navmenu'
import { RiBarChartHorizontalFill } from 'react-icons/ri'

import { useDispatch } from 'react-redux'
import { showSidebar } from '../../features/Home/homeSlice'
const Navbar = () => {
	const dispatch = useDispatch()

	const displayMobileMenu = () => {
		dispatch(showSidebar())
	}

	return (
		<Wrapper>
			<div className='nav'>
				<img
					src={meterLogo}
					alt='meter-logo'
				/>
			</div>
			<Navmenu />
			<RiBarChartHorizontalFill
				className='menu-icon'
				onClick={displayMobileMenu}
			/>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	box-shadow: 0 5px 0 #33333343;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 3rem 1rem;
	img {
		width: 20rem;
	}
	.navmenu {
		display: none;
	}
	.menu-icon {
		display: none;
	}

	@media (max-width: 95em) {
		.navmenu {
			display: flex;
		}
		justify-content: space-between;
	}
	@media (max-width: 1050px) {
		.navmenu {
			display: none;
		}
		.menu-icon {
			display: block;
			font-size: 5rem;
			color: var(--primary-5);
			transition: all 0.3s;
			cursor: pointer;
			&:hover {
				transform: scale(1.2);
			}
			&:active {
				transform: rotate(90deg);
			}
		}
	}
`
export default Navbar
