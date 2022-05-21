function CheckComp({ label, splits, setSplits, help }) {
	const handleChange = (e) => {
		let splitsCopy = splits.map((split) => ({ ...split }))
		let obj = splitsCopy.find((o) => o.value === e.target.id)
		obj.isChecked = !obj.isChecked
		setSplits(splitsCopy)
	}

	return (
		<div className="mb-3">
			<label htmlFor="color" className="form-label">
				{label}
			</label>
			<div className="input-group">
				<div className="form-check form-switch">
					{splits.map((o) => {
						return (
							<div key={o.value} className="form-check ">
								<input
									id={o.value}
									className="form-check-input form-check-input--cursor"
									type="checkbox"
									role="switch"
									checked={o.isChecked}
									onChange={handleChange}
									disabled={o.isDisabled}
								/>
								<label
									className="form-check-label  me-3 form-check-input--cursor"
									htmlFor={o.value}
								>
									{o.label}
								</label>
							</div>
						)
					})}
				</div>
			</div>
			<div className="form-text">{help}</div>
		</div>
	)
}
export default CheckComp
