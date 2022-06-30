
function SelectComp({ label, color, setColor, options, help, required }) {
	const handleChange = (e) => {
		const value = e.target.value
		setColor(value)
	}
	return (
		<div className="mb-3">
			<label htmlFor="color" className="form-label">
				{label}
			</label>
			<div className="input-group">
				<select
					id="color"
					className="form-control"
					aria-label={label}
					value={color}
					onChange={handleChange}
					required={required}
				>
					{options.map((option) => {
						return (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						)
					})}
				</select>
			</div>
			<div className="form-text">{help}</div>
		</div>
	)
}

export default SelectComp
