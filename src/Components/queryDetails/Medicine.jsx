import { useEffect, useRef, useState } from 'react'
import AddMedicineModal from '../modals/AddMedicineModal'
// import ActionConfirmModal from '../modals/ActionConfirmModal'
import MedicineTableRow from './MedicineTableRow'

function Medicine({ medicines, setMedicines }) {
	// const [showButtons, setShowButtons] = useState(false)
	// const [showActions, setShowActions] = useState(false)
	const [showEditIcon, setShowEditIcon] = useState(false)
	const [isEditIconActive, setEditIconActive] = useState(false)
	const [isMouseInMedArea, setIsMouseInMedArea] = useState(false)
	const splits = {
		1: 'full',
		0.5: 'half',
		0.25: 'quater',
	}

	function getParts(parts) {
		return parts.map((part) => splits[part]).join(', ')
	}

	function deleteMed(id) {
		const newMedicines = medicines.filter((medicine) => medicine.id !== id)
		setMedicines(newMedicines)
	}


	let timer = useRef(null)

	useEffect(() => {
		if (isMouseInMedArea) {
			console.log('pelė viduje')

			if (timer) clearTimeout(timer.current)

			setShowEditIcon(true)
		} else {
			console.log('pelė lauke')

			if (!isEditIconActive) setShowEditIcon(false)

			timer.current = setTimeout(() => {
				setEditIconActive(false)
				setShowEditIcon(false)
			}, 5000)

			return () => clearTimeout(timer)
		}
	}, [isMouseInMedArea, isEditIconActive])

	return (
		<div
			className="input-row "
			onMouseEnter={(e) => {
				setIsMouseInMedArea(true)
			}}
			onMouseLeave={(e) => {
				setIsMouseInMedArea(false)
			}}
		>
			<div className="input-row-title d-flex justify-content-between">
				{/* TODO padaryti update ir ištrynimus kai paspaudžiama ant eilutės */}
				{/* NOTE Padidinti visą UI, mugtukus */}
				<div className="d-flex">
					<h3 className="display-6">Medicine</h3>
					{showEditIcon ? (
						<button
							type="button"
							className="btn text-dark"
							onClick={() => setEditIconActive((e) => !e)}
						>
							<i
								className={isEditIconActive ? 'bi bi-pencil-fill' : 'bi bi-pencil'}
							></i>
						</button>
					) : null}
				</div>

				{/* <!-- Button trigger add medicine modal --> */}
				{isEditIconActive ? (
					<button
						type="button"
						className="btn  text-info"
						data-bs-toggle="modal"
						data-bs-target="#addMedicineModal"
					>
						<i className="bi bi-plus-square"></i> New
					</button>
				) : null}
			</div>
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
					{medicines.map((med, index) => {
						return (
							<MedicineTableRow
								key={index}
								med={med}
								index={index}
								getParts={getParts}
								deleteMed={deleteMed}
								isEditIconActive={isEditIconActive}
								setEditIconActive={setEditIconActive}
							/>
						)
					})}
				</tbody>
			</table>

			<AddMedicineModal medicines={medicines} setMedicines={setMedicines} />
		</div>
	)
}

export default Medicine
