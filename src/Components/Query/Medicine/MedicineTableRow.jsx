import { useState } from 'react'

import EditModal from '../../modals/EditModal'
import DeleteModal from '../../modals/DeleteModal'

function MedicineTableRow({
	med,
	index,
	getParts,
	deleteMed,
	updateMed,
	isEditIconActive,
}) {
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)

	const handleDeleteModal = () => setShowDeleteModal(true)
	const handleEditModal = () => setShowEditModal(true)

	const handleClose = () => {
		setShowDeleteModal(false)
		setShowEditModal(false)
	}

	const handleDelete = () => {
		deleteMed(med.id)
		setShowDeleteModal(false)
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
							<button
								type="button"
								className="btn btn-outline-secondary text-info"
								onClick={handleEditModal}
							>
								<i className="bi bi-pen"></i>
							</button>
							<button
								type="button"
								className="btn btn-outline-secondary text-danger"
								onClick={handleDeleteModal}
							>
								<i className="bi bi-trash3 "></i>
							</button>
							<DeleteModal
								show={showDeleteModal}
								handleClose={handleClose}
								handleDelete={handleDelete}
								bodyContent={medDescription}
							/>
							<EditModal
								show={showEditModal}
								handleClose={handleClose}
								medDetails={med}
								updateMed={updateMed}
							/>
						</div>
					</div>
				</td>
			) : null}
		</tr>
	)
}

export default MedicineTableRow
