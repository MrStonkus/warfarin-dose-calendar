function Medicine() {
	return (
		<fieldset>
			<legend>Medicine</legend>

			<table className="blueTable">
				<thead>
					<tr>
						<th>Nr.</th>
						<th>Name</th>
						<th>Mg/tablet</th>
						<th>Quantity</th>
						<th>Color</th>
						<th>Splits</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>1</td>
						<td>Warfarin</td>
						<td>5</td>
						<td>100</td>
						<td>red</td>
						<td>1, 0.5</td>
					</tr>
				</tbody>
			</table>
		</fieldset>
	)
}

export default Medicine
