import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import QueryDetails from './Components/QueryDetails'
import Calendar from './Components/Calendar'
import { getDefaultData } from './data'

function App() {
	const [doses, setDoses] = useState([]) // doses from api
	const [wDose, setWDose] = useState(35) // weekly dose
	const [dateRange, setDateRange] = useState({
		start: '2022-05-01',
		end: '2022-05-09',
	}) // start and end of calendar dates
	
	
	useEffect(() => {
		const defaultData = getDefaultData()

		// colect data from api
		defaultData.weeklyDose = wDose
		defaultData.startDate = dateRange.start
		defaultData.endDate = dateRange.end

		getCalendar(defaultData)
		console.log(dateRange)
	}, [wDose, dateRange])


  function getCalendar(data) {
		axios
			.post(`https://stonkus.lt/node/warfarin-calendar/`, data)
      .then((res) => {
				setDoses(res.data)
			})
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>Warfarin Dose Calendar</h1>
			</header>
			<main>
				<QueryDetails
					wDose={wDose}
					setWDose={setWDose}
					dateRange={dateRange}
					setDateRange={setDateRange}
				/>
				<Calendar doses={doses} />
			</main>
		</div>
	)
}

export default App
