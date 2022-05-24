import { useState } from 'react'

import DeteleModal from '../modals/DeteleModal'

function MedicineTableRow({
	med,
	index,
	getParts,
	deleteMed,
	isEditIconActive,
}) {
	const [show, setShow] = useState(false)

	const handleShow = () => setShow(true)
	const handleClose = () => setShow(false)
	const handleDelete = () => {
		deleteMed(med.id)
		setShow(false)
	}
	const medNr = index + 1
	const medDescription = `Medicine: Nr. ${medNr}, ${med.name} - ${med.mg} mg. ${med.quantity} pcs.`

	return (
		<tr className="med-row">
			<td>{medNr}</td>
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
							{/* Edit button ----- */}
							<button
								type="button"
								className="btn btn-outline-secondary text-info"
								data-bs-toggle="modal2"
								data-bs-target="#action-confirm-modal"
							>
								<i className="bi bi-pen"></i>
							</button>

							{/* Delete button ----- */}
							<button
								type="button"
								className="btn btn-outline-secondary text-danger"
								onClick={handleShow}
							>
								<i className="bi bi-trash3 "></i>
							</button>
							{/* modal confirmation */}
							<DeteleModal
								show={show}
								handleClose={handleClose}
								handleDelete={handleDelete}
								bodyContent={medDescription}
							/>
						</div>
					</div>
				</td>
			) : null}
		</tr>
	)
}

export default MedicineTableRow
