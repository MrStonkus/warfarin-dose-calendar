import addMedPng from '../../pics/addmedicine.png'

function Medicine({ medicines }) {

	const splits = {
		"1": "full",
		"0.5": "half",
		"0.25": "quater",
	}

	function getParts(parts) {
		return parts.map((part) => splits[part]).join(', ')
	}

	return (
		<div className="input-row">
			<h3 className="display-6">Medicine</h3>

			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">Nr.</th>
						<th scope="col">Name</th>
						<th scope="col">Mg</th>
						<th scope="col">Quantity</th>
						<th scope="col">Color</th>
						<th scope="col">Splits</th>
					</tr>
				</thead>

				<tbody>
						{
							medicines.map((m, i) => {
								return (
									<tr key={i}>
										<td scope="row">{i + 1}</td>
										<td>{m.name}</td>
										<td>{m.mg}</td>
										<td>{m.quantity}</td>
										<td>{m.color}</td>
										<td>{getParts(m.splitParts)}</td>
									</tr>
								)
							})
						}



				</tbody>
			</table>

			<div className="btn-add-med">
				{/* <button className="btn"> */}
				<img className="btn-pic" src={addMedPng} alt="Add medicine" />
				{/* </button> */}
			</div>
		</div>
	)
}
// TODO pridėti redagavimą, pridėjimą, ištrynimą
export default Medicine
