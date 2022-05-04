import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import QueryDetails from './Components/QueryDetails'
import Calendar from './Components/Calendar'
import { getMedModalProps } from './data'
import Modal from './Components/Modal'

function App() {
	const [doses, setDoses] = useState([]) // doses from api
	const [wDose, setWDose] = useState(0) // weekly dose
	const [dateRange, setDateRange] = useState() // start and end of calendar dates object start:, end:
	const [medicines, setMedicines] = useState([])
	const [isMedModalOpen, setMedModal] = useState(false) // modal for adding new med
	const [isInputs, setIsInputs] = useState(false)

	// first time on load
	useEffect(() => {
		// let data = localStorage.getItem('data')
		let data = JSON.parse(localStorage.getItem('data'))
		console.log(data)

		if (!data) {
			data = {}
			//set default data
			data.weeklyDose = 41
			data.startDate = '2022-04-06'
			data.endDate = '2022-05-01'
			data.medArr = [
				{
					name: 'Warfarinum',
					mg: 5,
					quantity: 100,
					splitParts: [1, 0.5],
					color: 'red',
				}
			]
		}
		// set data
		setWDose(data.weeklyDose)

		setDateRange({
			start: data.startDate,
			end: data.endDate,
		})
		setMedicines(data.medArr)
		setIsInputs(true)
		localStorage.setItem('data', JSON.stringify(data))
	}, [])

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
		axios.post(`https://stonkus.lt/node/warfarin-calendar/`, data).then((res) => {
			setDoses(res.data)
		})
	}


	return (
		<div className="App">
			<header className="App-header">
				<h1>Warfarin Dose Calendar</h1>
			</header>
			<main>
				{isInputs ? (
					<>
						<QueryDetails
							wDose={wDose}
							setWDose={setWDose}
							dateRange={dateRange}
							setDateRange={setDateRange}
							medicines={medicines}
						/>
						<Calendar doses={doses} />
					</>
				) : (
					<h2>No default input data!</h2>
				)}
			</main>

			{isMedModalOpen ? (
				<Modal options={getMedModalProps()} setMedModal={setMedModal} />
			) : null}
		</div>
	)
}

export default App
