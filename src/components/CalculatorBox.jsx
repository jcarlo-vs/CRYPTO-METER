import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { changeText, clearvalues, getSingleCrypto, searchCrypto } from '../features/Calculator/calculatorSlice'
import { FaExchangeAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import numberFormat from '../utils/formatNumber'

const CalculatorBox = () => {
	const [toggle, setToggle] = useState(false)
	const [quantity, setQuantity] = useState('')
	const [selectValue, setSelectvalue] = useState('usd')
	const [drop, setDrop] = useState(false)

	const { coins, isLoading, text, singleCryptoInfo } = useSelector((store) => store.calculator)

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getSingleCrypto('bitcoin'))
	}, [])

	const searchCoin = (e) => {
		const value = e.target.value
		setToggle(true)
		dispatch(changeText(value))
		dispatch(searchCrypto(value))
	}

	const getCryptoInfo = (id) => {
		setToggle(false)
		dispatch(getSingleCrypto(id))

		dispatch(clearvalues())
	}
	const changeQuantity = (e) => {
		const value = e.target.value
		setQuantity(value)
	}

	const getSelectValue = (e) => {
		const value = e.target.value
		setSelectvalue(value)
	}

	const selectedOption = (item) => {
		if (item === 'usd') {
			return selected
		} else {
			return
		}
	}

	if (isLoading) {
	}

	return (
		<Wrapper>
			<div className='inner-box'>
				{/* INPUT TOP */}
				<input
					className='search-input'
					type='text'
					placeholder='Search Crypto'
					value={text}
					onChange={searchCoin}
				/>
				{/* DROPDOWN SEARCH */}
				<div className={text.length < 1 || !toggle ? 'searched-container display' : 'searched-container'}>
					{coins &&
						coins.map((item, index) => {
							const { id, name, symbol, market_cap_rank: rank, thumb: image } = item

							return (
								<section
									onClick={() => getCryptoInfo(id)}
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
								</section>
							)
						})}
				</div>

				{/* MIDDLE CONTAINER */}
				<div className='coin-container'>
					{/* IMAGENAME QUANTITY */}
					<div className='image-name'>
						<input
							onChange={changeQuantity}
							value={quantity}
							type='number'
							className='quantity-input'
							placeholder='Quantity'
						/>

						<div className='coin-in'>
							<img
								className='img'
								src={(singleCryptoInfo && singleCryptoInfo.image) || ''}
								alt=''
							/>
							<h2>{(singleCryptoInfo && singleCryptoInfo.symbol.toUpperCase()) || 'Crypto'}</h2>
						</div>
					</div>
					{/* ICON EXCHANGE */}
					<FaExchangeAlt className='mid-icon' />
					{/* SELECT */}
					<div className='select'>
						<select
							defaultValue={'USD'}
							onChange={getSelectValue}
							onClick={() => setDrop(true)}>
							{
								<>
									{singleCryptoInfo &&
										singleCryptoInfo.globalCurrencies.map((item, index) => {
											return (
												<>
													{item === 'usd' ? (
														<option
															value={item}
															key={index}
															selected>
															{item.toUpperCase()}
														</option>
													) : (
														<option
															value={item}
															key={index}>
															{item.toUpperCase()}
														</option>
													)}
												</>
											)
										})}
								</>
							}
						</select>
					</div>
				</div>
				<h1 className='price'>
					{singleCryptoInfo ? singleCryptoInfo.globalPrice[selectValue] * quantity : 'Amount Price'}{' '}
					{selectValue.toUpperCase()}
				</h1>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	box-shadow: 0 0 2px #3333337b;
	.coin-in {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 0 1rem;
		gap: 1rem;
	}

	.select {
		text-align: center;
	}
	.price {
		text-align: center;
		color: var(--primary-5);
	}
	h2 {
		font-size: 2rem;
	}
	.image-name {
		display: flex;
		align-items: center;
		border: 1px solid #333333;
		min-height: 5rem;
		max-width: 35rem;
		font-size: 1.5rem;
		padding: 1rem;
		img {
			max-width: 2rem;
		}
	}
	.mid-icon {
		font-size: 3rem;
	}
	.quantity-input {
		/* padding: 0.8rem 1rem; */

		border: none;
		border-right: solid 2px #33333350;
		max-width: 20rem;
		&::placeholder {
			font-size: 1.3rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	select {
		padding: 0.8rem 1rem;
		/* width: 10rem; */
		display: block;
		width: 100%;
		border-radius: 10px;
		border: none;
		font-size: 1.8rem;
		box-shadow: 0 0 2px 1px black;
		width: 10rem;
	}
	option {
		padding: 0.8rem 1rem;
		width: 10rem;
		border-radius: 10px;
		border: none;
		box-shadow: 0 0 3px 10px black;
	}
	.coin-container {
		margin: 0 auto;

		max-width: 90vw;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		justify-items: center;

		column-gap: 1rem;
	}
	.header-item {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.item-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		text-align: center;

		box-shadow: 0 1px 0 #3333332e;

		text-decoration: none;
		color: var(--primary-3);
		height: 5rem;

		&:hover {
			background-color: var(--light-1);
			cursor: pointer;
		}
	}
	.search-dropdown {
	}
	.inner-box {
		max-width: 60rem;
		/* width: 80vw; */
		height: 30rem;
		margin-top: 5rem;
		display: grid;
		grid-template-rows: 20% 1fr auto;
		position: relative;

		border-radius: 2rem;
	}

	.search-input {
		font-size: 1.5rem;
		padding: 1rem 1rem;

		border-radius: 1rem;
		outline: none;
		border: none;
		box-shadow: 0 0 1px 1px #000000f7;
		&::placeholder {
			font-weight: 300;
			font-size: 1.5rem;
		}
		width: 60%;
		height: 80%;
		margin: 0 auto;
	}

	option {
		min-height: 20rem;
	}

	.searched-container {
		color: black;
		position: absolute;
		top: 6rem;
		left: 50%;
		transform: translateX(-50%);
		background-color: white;
		width: 60%;
		box-shadow: 0 0 1px 1px #07070760;
		overflow-y: scroll;
		height: 30rem;
	}

	@media (max-width: 576px) {
		.coin-container {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr;
		}
	}

	@media (max-width: 380px) {
		.coin-in h2 {
			overflow-wrap: anywhere;
		}
	}
`
export default CalculatorBox
