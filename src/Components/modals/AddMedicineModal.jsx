import { useRef, useState } from 'react'
import InputComp from './inputs/InputComp'
import SelectComp from './inputs/SelectComp'
import CheckComp from './inputs/CheckComp'
import { v4 as uuidv4 } from 'uuid'
import { colorOptions, defSplits } from '../../options/medicineOptions'

function AddMedicineModal({ medicines, setMedicines }) {
	const closeBtn = useRef(null)
	const [name, setName] = useState('')
	const [mg, setMg] = useState('')
	const [quantity, setQuantity] = useState('')
	const [color, setColor] = useState('')
	const [splits, setSplits] = useState(defSplits)

	const onSubmit = (event, closeBtn) => {
		// stop the form from submitting
		event.preventDefault()
		// continue if all inputs are valid

		const newMedicine = {
			id: uuidv4(),
			name,
			mg,
			quantity,
			color,
			splitParts: splits
				.filter((split) => split.isChecked)
				.map((split) => split.value),
		}

		// update state, add new medicine to medicines array
		setMedicines([...medicines, newMedicine])

		// clear form
		setName('')
		setMg('')
		setQuantity('')
		setColor('')
		setSplits(defSplits)

		// Close modal
		closeBtn.current.click()
	}

	return (
		<div
			className="modal fade"
			id="addMedicineModal"
			tabIndex="-1"
			aria-labelledby="addMedicineModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content p-4">
					<div className="modal-header">
						<h5 className="modal-title" id="addMedicineModalLabel">
							Add new medicine
						</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						{/* modal body start ----------------------------------- */}

						<form onSubmit={(event) => onSubmit(event, closeBtn)}>
							<InputComp
								labelText="Medicine name"
								type="text"
								help="The name of the medicine. Common are Warfarin and Orfarin."
								stateName={name}
								stateSetName={setName}
								required={true}
							></InputComp>

							<InputComp
								labelText="Drug concentration"
								type="number"
								help="The milligrams per one full tablet."
								addon="mg."
								stateName={mg}
								stateSetName={setMg}
								required={true}
							></InputComp>

							<InputComp
								labelText="Quantity"
								type="number"
								help="The quantity of this medicine tablets that you have."
								addon="pcs."
								stateName={quantity}
								stateSetName={setQuantity}
								required={true}
							></InputComp>

							<SelectComp
								label="Color"
								color={color}
								setColor={setColor}
								options={colorOptions}
								help="Choose color of the medicine tablets."
								required={true}
							></SelectComp>

							<CheckComp
								label="Splits"
								splits={splits}
								setSplits={setSplits}
								help="Check all possible tablet splits."
							></CheckComp>

							<div className="form-label mb-4">
								<span className="form-text text-danger">All fields are required.</span>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
							<button
								type="button"
								className="btn btn-secondary ms-3"
								data-bs-dismiss="modal"
								ref={closeBtn}
							>
								Close
							</button>
						</form>

						{/* modal body end ----------------------------------- */}
					</div>
				</div>
			</div>
		</div>
	)
}
export default AddMedicineModal
