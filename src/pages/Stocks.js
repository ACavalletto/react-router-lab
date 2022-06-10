import { Link } from "react-router-dom";
export default function Stock({ data }) {
	return (
		<>
			{data.map((stock) => {
				const { name } = stock;
				return (
					<Link to={`/stocks/${name}`}>
						<div>{name}</div>
					</Link>
				);
			})}
		</>
	);
}
