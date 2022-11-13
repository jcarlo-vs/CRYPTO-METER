import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import sidebarLinks from '../../utils/links'
import NavLinks from '../Layouts/NavLinks'

const Navmenu = () => {
	const location = useLocation()
	const slicedLocation = location.pathname

	return (
		<Wrapper className='navmenu'>
			{sidebarLinks.map((item, index) => {
				const { id, name, icon, path } = item

				return (
					<Link
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
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 0.3rem;
	/* align-items: stretch; */

	.center-container {
		text-decoration: none;
		color: var(--primary-4);
		transition: all 0.4s;

		&:hover {
			background-color: var(--primary-4);
			color: white;
		}
		padding: 3rem 2rem;
		box-shadow: 0 0 3px #3333334e;
	}
	ul {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	li {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
	h3 {
		font-size: 1.8rem;
	}
	span {
		font-size: 2rem;
	}
	.active {
		background-color: var(--primary-3);
		transform: translateY(1rem);
		color: white;
	}

	@media (max-width: 83em) {
		h3 {
			font-size: 1.3rem;
		}
		li {
			gap: 0.5rem;
		}
	}
`
export default Navmenu
