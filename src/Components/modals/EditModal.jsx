import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import InputComp from './inputs/InputComp'
import SelectComp from './inputs/SelectComp'
import CheckComp from './inputs/CheckComp'
import { colorOptions, defSplits } from '../../options/medicineOptions'

function EditModal({ show, handleClose, medDetails, updateMed }) {

	const [name, setName] = useState(medDetails.name)
	const [mg, setMg] = useState(medDetails.mg)
	const [quantity, setQuantity] = useState(medDetails.quantity)
	const [color, setColor] = useState(medDetails.color)

	for (let part of defSplits) {
		part.isChecked = medDetails.splitParts.indexOf(part.value) > -1 ? true : false
	}
	const [splits, setSplits] = useState(defSplits)

	const onSubmit = (event) => {
		// stop the form from submitting
		event.preventDefault()
		// continue if all inputs are valid

		updateMed(
			{
				id: medDetails.id,
				name,
				mg,
				quantity,
				color,
				splitParts: splits
					.filter((split) => split.isChecked)
					.map((split) => split.value),
			}
		)
		handleClose()
	}


	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Edit Medicine</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form onSubmit={(event) => onSubmit(event)}>
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
					<Modal.Footer>
						<Button variant="outline-secondary" onClick={handleClose}>
							Cancel
						</Button>
						<Button variant="outline-secondary" type="submit" value="Submit" >
							Update
						</Button>
					</Modal.Footer>
				</form>
			</Modal.Body>
		</Modal >
	)
}
export default EditModal
