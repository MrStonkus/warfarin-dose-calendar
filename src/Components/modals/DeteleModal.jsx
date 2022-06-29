import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function DeteleModal({ show, handleClose, handleDelete, bodyContent }) {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Confirm delete</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<span>{bodyContent}</span>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-secondary" onClick={handleClose}>
					Cancel
				</Button>
				<Button variant="outline-danger" onClick={handleDelete}>
					Delete
				</Button>
			</Modal.Footer>
		</Modal>
	)
}
export default DeteleModal
