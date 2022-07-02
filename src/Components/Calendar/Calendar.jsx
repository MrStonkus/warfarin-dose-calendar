import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

function Calendar({ doses }) {

  const getDate = (date) => {
    return new Date(date).toLocaleDateString()
  }

  const getWeek = (date) => {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(date).getDay()]
  }

  return (
    <div className="pt-sm-4 pt-4 pt-md-5">
      <h2 className='display-5'>Dosage Calendar</h2>
      <SimpleBarReact style={{ maxHeight: '75vh' }}>
        <table className="table mb-0 ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Week</th>
              <th scope="col">Dose</th>
            </tr>
          </thead>
          <tbody>
            {
              doses.map((d, i) => <tr key={i}>
                <td>{i + 1}</td>
                <td>{getDate(d.date)}</td>
                <td>{getWeek(d.date)} </td>
                <td>{d.mg} mg.</td>
              </tr>)
            }
          </tbody>
        </table>
      </SimpleBarReact>
    </div >
  )
}

export default Calendar

