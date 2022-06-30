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
		<div className="p-4">
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