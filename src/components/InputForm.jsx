import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { changeText, clearValues, searchCrypto } from '../features/Cryptocurrencies/cryptocurrencySlice'
import { Link } from 'react-router-dom'
const InputForm = () => {
	const { searchedCoins, text, isError } = useSelector((store) => store.crypto)

	const dispatch = useDispatch()

	const searchCoin = (e) => {
		const value = e.target.value
		dispatch(changeText(value))
		dispatch(searchCrypto(value))
	}

	return (
		<Wrapper>
			<input
				type='text'
				value={text}
				onChange={searchCoin}
				placeholder='Search Crypto...'
			/>
			<div className={text.length < 1 ? 'searched-container display' : 'searched-container'}>
				{searchedCoins &&
					searchedCoins.map((item, index) => {
						const { id, name, symbol, market_cap_rank: rank, thumb: image } = item

						return (
							<Link
								onClick={() => dispatch(clearValues())}
								to={`/cryptocurrencies/${id}`}
								className='item-container'
								key={index}>
								<p className='rank'>{rank}</p>
								<div className='header-item'>
									<img
										src={image}
										alt={name}
									/>
									<p>{name}</p>
								</div>
								<p>{symbol}</p>
							</Link>
						)
					})}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 2rem;

	.header-item {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.item-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		margin-top: 1rem;
		box-shadow: 0 1px 0 #3333333d;
		padding: 1rem;
		text-decoration: none;
		color: var(--primary-3);

		&:hover {
			background-color: var(--light-1);
			cursor: pointer;
		}
	}
	.searched-container {
		color: black;
		position: absolute;
		top: 4rem;
		left: 0;
		background-color: white;
		width: 100%;
		box-shadow: 0 0 0 1px #3333336d;
		overflow-y: scroll;
		height: 30rem;
	}
	input {
		font-size: 1.4rem;
		padding: 0.8rem 1rem;
	}
	.rank {
		font-size: 1.3rem;
	}

	@media (max-width: 768px) {
		top: 75%;
		left: 2%;
		input {
			padding: 0.5rem;

			&::placeholder {
				font-size: 1rem;
				padding-left: 0.5rem;
			}
		}
	}
`
export default InputForm
