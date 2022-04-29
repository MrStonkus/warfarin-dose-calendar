
function Calendar({ doses }) {
	return (
		<div className="calendar">
      <h2>Dosage calendar</h2>
      {
        doses.map((d, i) => <div key={i}>Date: {d.date} Dose: {d.mg} mg. </div>)
      }
		</div>
	)
}

export default Calendar