export default function CompanyStock(prop) {
	const data = prop.data
	return (
		<>
			<h1>{data.name} Stock</h1>
			<h3> {data.symbol}</h3>
			<h3>Price: {data.lastPrice}</h3>
			<h3>Price Change: {(data.change).toFixed(4)}</h3>
		</>
	);
}
