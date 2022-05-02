function WeeklyDose({ wDose, setWDose }) {
	return (
		<fieldset>
			<legend>Weekly Dose</legend>
			<div className="">
				<div className="input-row">
					<label className="" htmlFor="weekly-dose">
						Your weekly dose:
					</label>
					<div className="">
						<input
							id="weekly-dose"
							name="weekly-dose"
							type="number"
							placeholder=""
							className=""
							style={{ width: '60px' }}
							defaultValue={wDose}
							onChange={(e) => setWDose(e.target.value)}
						/> mg
					</div>
				</div>
			</div>
			<span className="input-help">
				Enter your weekly dose in mg that you use now.
			</span>
		</fieldset>
	)
}

export default WeeklyDose
