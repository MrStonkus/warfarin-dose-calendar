function Dates({ dateRange, setDateRange }) {

	return (
		<div className="input-row">
			<h3 className="display-6">Dates</h3>
			<div className="input-group mb-2">
				<div className="me-3">
					<label htmlFor="start-date">From:</label>
					<div className="">
						<input
							id="start-date"
							name="start-date"
							type="date"
							className="form-control"
							defaultValue={dateRange.start}
							max={dateRange.end}
							onChange={(e) =>
								setDateRange({ start: e.target.value, end: dateRange.end })
							}
						/>
					</div>
					<span className="form-text mb-3">Generate from date</span>
				</div>

				<div className="">
					<label htmlFor="end-date">To:</label>
					<div className="">
						<input
							id="end-date"
							name="end-date"
							type="date"
							className="form-control"
							defaultValue={dateRange.end}
							min={dateRange.start}
							onChange={(e) =>
								setDateRange({ start: dateRange.start, end: e.target.value })
							}
						/>
					</div>
					<span className="form-text mb-3">Generate to date</span>
				</div>
			</div>
		</div>
	)
}
// TODO padaryti kad to negalėtų būti parinktas mažesnis nei from
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
export default Dates
