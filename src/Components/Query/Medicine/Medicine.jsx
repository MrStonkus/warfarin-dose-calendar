import { useEffect, useRef, useState } from 'react'
import AddMedicineModal from '../../modals/AddMedicineModal'
import MedicineTableRow from './MedicineTableRow'
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";


function Medicine({ medicines, setMedicines }) {

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

	function updateMed(med) {
		const newMedicines = medicines.map((medicine) => {
			if (medicine.id === med.id) {
				return med
			}
			return medicine
		})
		setMedicines(newMedicines)
	}

	// handle mouse over edit and med element activity
	let timer = useRef(null)
	useEffect(() => {
		if (isMouseInMedArea) {
			if (timer) clearTimeout(timer.current)
			setShowEditIcon(true)
		} else {
			if (!isEditIconActive) setShowEditIcon(false)
			timer.current = setTimeout(() => {
				setEditIconActive(false)
				setShowEditIcon(false)
			}, 600000)
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
				{/* TODO padaryti update*/}
				<div className="d-flex">
					<h3 className="display-5">Medicine</h3>
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
				{/* <!-- Button trigger add medicine modal --> */}
			</div>
			<SimpleBarReact style={{ maxHeight: 400 }}>
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">#</th>
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
									updateMed={updateMed}
									isEditIconActive={isEditIconActive}
								/>
							)
						})}
					</tbody>
				</table>
			</SimpleBarReact>

			<AddMedicineModal medicines={medicines} setMedicines={setMedicines} />
		</div>
	)
}

export default Medicine
