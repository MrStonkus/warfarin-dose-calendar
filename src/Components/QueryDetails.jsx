import WeeklyDose from "./queryDetails/WeeklyDose"
import Dates from "./queryDetails/Dates"
import Medicine from "./queryDetails/Medicine"

function QueryDetails({ wDose, setWDose, dateRange, setDateRange }) {
	console.log(dateRange.start, dateRange.end)

	return (
		<div className="pd-2">
			<h2>Query Details</h2>
			<WeeklyDose wDose={wDose} setWDose={setWDose} />
			<Dates
				dateRange={{ start: dateRange.start, end: dateRange.end }}
				setDateRange={setDateRange}
			/>
			<Medicine />
		</div>
	)
}

export default QueryDetails