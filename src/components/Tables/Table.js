import './Table.css';
const Tables = (props) => {
	return (
		<div>
			<table className='table-style'>
				<thead>
					<tr>
						<th>{props.items[0].title.toUpperCase()}</th>
						<th>{props.items[0].rating.toUpperCase()}</th>
					</tr>
				</thead>
				<tbody>
					{props.items.slice(1).map((item) => {
						return (
							<tr>
								<td>{item.title}</td>
								<td>{item.rating}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
export default Tables;
