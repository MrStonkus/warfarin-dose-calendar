function Dates({ dateRange, setDateRange }) {

	return (
		<div className="input-row">
			<h3 className="display-5">Dates</h3>
			<div className="input-group mb-2">

				<div class="container-fluid p-0">
					<div class="row">
						<div class="col">
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
						</div>
						<div class="col">
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
				</div>




			</div>

		</div>
	)
}
export default Dates
