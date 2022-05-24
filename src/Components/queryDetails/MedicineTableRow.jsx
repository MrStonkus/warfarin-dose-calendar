import { useState } from 'react'
// import DeleteConfirmModal from '../modals/DeleteConfirmModal'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

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
		setShow(false);
	}
	const medNr = index + 1

	return (
		<>
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
									// onClick={(e) => deleteMed(med.id)}
								>
									<i className="bi bi-trash3 "></i>
								</button>
								<Modal show={show} onHide={handleClose}>
									<Modal.Header closeButton>
										<Modal.Title>Confirm delete</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<span>
											Medicine: Nr.{medNr + ' ' + med.name + ' ' + med.mg + ' mg.' + ' ' + med.quantity + ' pcs.'}
										</span>
									</Modal.Body>
									<Modal.Footer>
										<Button variant="secondary" onClick={handleClose}>
											Cancel
										</Button>
										<Button variant="danger" onClick={handleDelete}>
											Delete
										</Button>
									</Modal.Footer>
								</Modal>
							</div>
						</div>
					</td>
				) : null}
			</tr>
		</>
	)
}

export default MedicineTableRow
