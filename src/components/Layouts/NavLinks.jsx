import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { showSidebar } from '../../features/Home/homeSlice'
import sidebarLinks from '../../utils/links'

const NavLinks = ({ mobile }) => {
	const dispatch = useDispatch()
	const location = useLocation()
	const slicedLocation = location.pathname

	const toggleMenu = () => {
		dispatch(showSidebar())
	}

	return (
		<Wrapper>
			{sidebarLinks.map((item, index) => {
				const { id, name, icon, path } = item

				return (
					<Link
						onClick={mobile === 'activate' ? toggleMenu : ''}
						to={path}
						className={slicedLocation === path ? 'center-container active' : 'center-container'}
						key={id}>
						<ul>
							<li>
								<span>{icon}</span>
								<h3>{name}</h3>
							</li>
						</ul>
					</Link>
				)
			})}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: start;
	margin-top: 15rem;

	.center-container {
		width: 100%;
		text-decoration: none;
		color: var(--primary-6);
		height: 100%;
		display: grid;
		align-items: center;
		box-shadow: 0 0 3px #3333334e;
		margin-top: 1rem;
		transition: all 0.2s;
		&:hover {
			background-color: var(--primary-6);
			color: white;
			cursor: pointer;
		}
		&:hover li {
			transform: translateX(0.5rem);
		}
	}
	ul {
		list-style: none;
	}
	li {
		height: 10rem;
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		column-gap: 2rem;
		margin-left: 2rem;
		transition: all 0.3s;
	}
	span {
		font-size: 3rem;
	}
	h3 {
		font-size: 1.5rem;
	}

	.active {
		background-color: var(--primary-3);
		transform: translateX(1rem);
		color: white;
	}

	@media (max-width: 95em) {
	}
`
export default NavLinks
