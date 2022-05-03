function Modal({ options, setMedModal }) {
	return (
		<>
			<div className="modal-background" onClick={() => setMedModal(false)} />
			<div className="modal">
				<h2>{options.title}</h2>
				<div className="modal-content">{options.content}</div>
			</div>
		</>
	)
}
// TODO dabaigti
export default Modal
