function WeeklyDose({ wDose, setWDose }) {
	return (
		<fieldset className="input-row">
			<h3 className="display-6">Weekly Dose</h3>

			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder="Weekly warfarin dose in mg"
					aria-label="Weekly warfarin dose in mg"
					aria-describedby="basic-addon2"
					defaultValue={wDose}
					onChange={(e) => setWDose(e.target.value)}
					required
				/>
				<span className="input-group-text" id="basic-addon2">
					mg.
				</span>
			</div>
			<span className="form-text mb-2">
				Enter your weekly dose in mg that you use now.
			</span>
		</fieldset>
	)
}

export default WeeklyDose
