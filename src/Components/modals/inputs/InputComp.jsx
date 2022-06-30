import { v4 as uuidv4 } from 'uuid'

function InputComp({
	labelText,
	type,
	help,
	addon,
	stateName,
	stateSetName,
	required,
}) {
	const inputId = uuidv4()
	const inputId2 = uuidv4()

	return (
		<div className="mb-3">
			<label htmlFor={inputId} className="form-label">
				{labelText}
			</label>
			<div className="input-group">
				<input
					id={inputId}
					value={stateName}
					onChange={(e) => stateSetName(e.target.value)}
					type={type}
					className="form-control"
					aria-label={labelText}
					aria-describedby={inputId2}
					required={required}
				/>
				{addon ? <span className="input-group-text">{addon}</span> : null}
			</div>
			<div id={inputId2} className="form-text">
				{help}
			</div>
		</div>
	)
}

export default InputComp
