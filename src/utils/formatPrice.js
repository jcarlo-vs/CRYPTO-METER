const formatPrice = (num) => {
	const numString = String(num).split('.')[0]
	const sliceNum = numString.slice(-1)
	if (sliceNum === '0' && numString.length < 2) {
		const newNum = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 5,
		}).format(num)

		return newNum
	} else {
		const newNum = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		}).format(num)

		return newNum
	}
}

export default formatPrice
