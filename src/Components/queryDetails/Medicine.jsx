import { useState } from 'react'
import addMedPng from '../../pics/addmedicine.png'
import AddMedicineModal from '../modals/AddMedicineModal'

function Medicine({ medicines, setMedicines }) {
	const [isShowActions, setIsShowActions] = useState(false)

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
					{medicines.map((m, i) => {
						return (
							<tr
								key={i}
								className="med-row"
								onClick={() => setIsShowActions((e) => !e)}
							>
								<td>{i + 1}</td>
								<td>{m.name}</td>
								<td>{m.mg}</td>
								<td>{m.quantity}</td>
								<td>{m.color}</td>
								<td>{getParts(m.splitParts)}</td>
								{isShowActions ? (
									<td className="med-actions" onClick={() => deleteMed(m.id)}>
										Delete
									</td>
								) : null}
							</tr>
						)
					})}
				</tbody>
			</table>

			<div className="btn-add-med">
				{/* <!-- Button trigger modal --> */}
				<button
					type="button"
					className="btn"
					data-bs-toggle="modal"
					data-bs-target="#addMedicineModal"
				>
					<img className="btn-pic" src={addMedPng} alt="Add medicine" />
				</button>
			</div>
			
			<AddMedicineModal medicines={medicines} setMedicines={setMedicines} />
		</div>
	)
}

export default Medicine
