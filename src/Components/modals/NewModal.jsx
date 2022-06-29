import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function NewModal({
	showNewModal,
	handleClose,
	handleAdd,
	medicines,
	setMedicines,
}) {

	// // sumbit button pressed
	// const onSubmit = (event) => {
	// 	// stop the form from submitting
	// 	console.log('Submiting');
	// 	event.preventDefault()
	// 	// continue if all inputs are valid

	// 	// const newMedicine = {
	// 	// 	id: uuidv4(),
	// 	// 	name,
	// 	// 	mg,
	// 	// 	quantity,
	// 	// 	color,
	// 	// 	splitParts: splits
	// 	// 		.filter((split) => split.isChecked)
	// 	// 		.map((split) => split.value),
	// }
	
	const [validated, setValidated] = useState(false)

	const handleSubmit = (event) => {
		const form = event.currentTarget
		if (form.checkValidity() === false) {
			event.preventDefault()
			event.stopPropagation()
			setValidated(false)
		}

		setValidated(true)
		handleAdd()
	}

	return (
		<Modal show={showNewModal} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add new medicine</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" required />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="outline-success" type="submit">
						Submit
					</Button>
				</Form>
			</Modal.Body>
			{/* <Modal.Footer>
				<Button variant="outline-secondary" onClick={handleClose}>
					Cancel
				</Button>
				<Button variant="outline-success" onClick={handleAdd}>
					Add
				</Button>
			</Modal.Footer> */}
		</Modal>
	)
}
export default NewModal
