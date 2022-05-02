
function Calendar({ doses }) {
	return (
		<div className="pd-2">
      <h2>Dosage Calendar</h2>
      {
        doses.map((d, i) => <div key={i}>Date: {d.date} Dose: {d.mg} mg. </div>)
      }
		</div>
	)
}

export default Calendar