import './App.css'
import Calendar from './Components/Calendar'
import { getDefaultData } from './data'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
	const [doses, setDoses] = useState([])

	useEffect(() => {
		getCalendar()
	}, [])

  function getCalendar() {
    const postData = getDefaultData()
		axios
			.post(`https://stonkus.lt/node/warfarin-calendar/`, postData)
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
        <Calendar doses={doses}/>
			</main>
		</div>
	)
}

export default App
