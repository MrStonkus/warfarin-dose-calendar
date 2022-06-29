import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import QueryDetails from './Components/QueryDetails'
import Calendar from './Components/Calendar'
import { v4 as uuidv4 } from 'uuid'

function App() {
	const [doses, setDoses] = useState([]) // doses from api
	const [wDose, setWDose] = useState(0) // weekly dose
	const [dateRange, setDateRange] = useState() // start and end of calendar dates object start:, end:
	const [medicines, setMedicines] = useState([])
	const [isInputs, setIsInputs] = useState(false)

	useEffect(() => {
		let data = JSON.parse(localStorage.getItem('data')) // get data from local storage
		if (!data) {
			data = {}
			data.weeklyDose = 42.8
			data.startDate = '2022-05-21'
			data.endDate = '2022-06-21'
			data.medArr = [
				{
					id: uuidv4(),
					name: 'Warfarinum',
					mg: 5,
					quantity: 100,
					splitParts: [1, 0.5],
					color: 'red',
				},
			]
		}
		setWDose(data.weeklyDose)
		setDateRange({
			start: data.startDate,
			end: data.endDate,
		})
		setMedicines(data.medArr)
		setIsInputs(true)
		localStorage.setItem('data', JSON.stringify(data))
	}, [])

	// update local storage
	useEffect(() => {
		if (!isInputs) return
		const data = {
			weeklyDose: wDose,
			startDate: dateRange.start,
			endDate: dateRange.end,
			medArr: medicines,
		}
		getCalendar(data)
		localStorage.setItem('data', JSON.stringify(data))
	}, [isInputs, wDose, dateRange, medicines])

	function getCalendar(data) {
		axios.post(`https://stonkus.lt/api/inr/`, data).then((res) => {
			setDoses(res.data)
		})
	}

	return (
		<div className="App container">
			<header className="App-header">
				<h1>Warfarin Dose Calendar</h1>
			</header>
			<main>
				{isInputs ? (
					<div class="container">
					<div class="row">
						<div class="col-md">
						<QueryDetails
							wDose={wDose}
							setWDose={setWDose}
							dateRange={dateRange}
							setDateRange={setDateRange}
							setMedicines={setMedicines}
							medicines={medicines}
						/>
						</div>
						<div class="col-md">
						<Calendar doses={doses} />
						</div>
					</div>
					</div>
				) : (
					<h2>No default input data!</h2>
				)}
			</main>
		</div>
	)
}

export default App
