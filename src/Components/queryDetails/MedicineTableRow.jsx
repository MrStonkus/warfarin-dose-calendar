
function MedicineTableRow({
	med,
	index,
	getParts,
	deleteMed,
	isEditIconActive,
	setEditIconActive,
}) {

	return (
		<tr
			className="med-row"
			
		>
			<td>{index + 1}</td>
			<td>{med.name}</td>
			<td>{med.mg}</td>
			<td>{med.quantity}</td>
			<td>{med.color}</td>
			<td>{getParts(med.splitParts)}</td>
			{isEditIconActive ? (
				<td className="med-actions">
					<div
						className="btn-toolbar mb-0"
						role="toolbar"
						aria-label="Toolbar with action buttons"
					>
						<div
							className="btn-group bg-white text-dark"
							role="group"
							aria-label="Edit and Delete buttons"
						>
							<button type="button" className="btn btn-outline-secondary text-info">
								<i className="bi bi-pen"></i>
							</button>
							<button
								type="button"
								className="btn btn-outline-secondary text-danger"
								onClick={(e) => deleteMed(med.id)}
							>
								<i className="bi bi-trash3 "></i>
							</button>
						</div>
					</div>
				</td>
			) : null}
		</tr>
	)
}

export default MedicineTableRow
