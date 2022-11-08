import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BsArrowLeftCircle } from 'react-icons/bs'

const Linkto = ({ path }) => {
	return (
		<Link to={path}>
			<LinktoButton className='flex'>
				<BsArrowLeftCircle className='icon' />
			</LinktoButton>
		</Link>
	)
}

const LinktoButton = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 2rem;
	font-size: 5rem;
	background-color: transparent;
	color: white;
	outline: none;
	border: none;
	cursor: pointer;
	&:hover {
		color: #b6c8f0;
	}

	@media (max-width: 600px) {
		font-size: 3rem;
		left: 1rem;
	}
`

export default Linkto
