import { FaHome, FaChartBar, FaExchangeAlt, FaNewspaper } from 'react-icons/fa'
import { BsCalculator } from 'react-icons/bs'

const sidebarLinks = [
	{
		id: 1,
		name: 'Home',
		icon: <FaHome />,
		path: '/',
	},
	{
		id: 2,
		name: 'Cryptocurrencies',
		icon: <FaChartBar />,
		path: '/cryptocurrencies',
	},
	{
		id: 3,
		name: 'Exchanges',
		icon: <FaExchangeAlt />,
		path: '/exchanges',
	},
	{
		id: 4,
		name: `Crypto Guide`,
		icon: <FaNewspaper />,
		path: '/cryptoguide',
	},
	{
		id: 5,
		name: 'Crypto Calculator',
		icon: <BsCalculator />,
		path: '/cryptocalculator',
	},
]

export default sidebarLinks
