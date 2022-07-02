import WeeklyDose from "./WeeklyDose"
import Dates from "./Dates"
import Medicine from "./Medicine"

function QueryDetails({
	wDose,
	setWDose,
	dateRange,
	setDateRange,
	medicines,
	setMedicines,
}) {
	return (
		<div className="pt-sm-4 pt-4 pt-md-5">
			<WeeklyDose wDose={wDose} setWDose={setWDose} />
			<Dates
				dateRange={{ start: dateRange.start, end: dateRange.end }}
				setDateRange={setDateRange}
			/>
			<Medicine medicines={medicines} setMedicines={setMedicines} />
		</div>
	)
}

export default QueryDetails