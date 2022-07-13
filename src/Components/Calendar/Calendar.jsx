import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
// import { XLSX } from 'xlsx';
import { utils, writeFile } from 'xlsx';

function Calendar({ doses }) {
  const getDate = (date) => {
    return new Date(date).toLocaleDateString()
  }

  const getWeek = (date) => {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(date).getDay()]
  }

  const handleExport = () => {
    const exportDoses = []
    doses.forEach(dose => {
      exportDoses.push({
        date: getDate(dose.date),
        week: getWeek(dose.date),
        dose: dose.mg
      })
    })

    const wb = utils.book_new();
    const ws = utils.json_to_sheet(exportDoses);
    utils.book_append_sheet(wb, ws, 'Doses');
    writeFile(wb, 'doses.xlsx');
  }

  return (
    <div className="pt-sm-4 pt-4 pt-md-5">
      <div className="d-flex justify-content-between">
        <h2 className='display-5'>Dosage Calendar</h2>
        <div className='d-flex align-items-center'>
          <button className="btn btn-secondary btn-sm" onClick={handleExport}>Export</button>
        </div>
      </div>
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

