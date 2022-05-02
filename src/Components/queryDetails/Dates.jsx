function Dates({dateRange, setDateRange}) {

	return (
		<fieldset>
			<legend>Dates</legend>
			<div className="">
				<div className="row-group">
					<div className="input-row">
						<label className="" htmlFor="start-date">
							From:
						</label>
						<div className="">
							<input
								id="start-date"
								name="start-date"
								type="date"
								className=""
								defaultValue={dateRange.start}
								onChange={(e) => setDateRange({start: e.target.value, end: dateRange.end})}
							/>
						</div>
					</div>
					<span className="input-help">Generate dosage from this date</span>
				</div>

				<div className="row-group">
					<div className="input-row">
						<label className="" htmlFor="end-date">
							To:
						</label>
						<div className="">
							<input
								id="end-date"
								name="end-date"
								type="date"
								className=""
								defaultValue={dateRange.end}
								onChange={(e) => setDateRange({start: dateRange.start, end: e.target.value})}
							/>
						</div>
					</div>
					<span className="input-help">Generate dosage to this date</span>
				</div>
			</div>
		</fieldset>
	)
}

export default Dates
