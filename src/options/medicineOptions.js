import { v4 as uuidv4 } from 'uuid'

export const colorOptions = [
	{ value: '', label: 'Please select' },
	{ value: 'red', label: 'Red' },
	{ value: 'blue', label: 'Blue' },
	{ value: 'white', label: 'White' },
]
    
export const defSplits = [
	{ value: '1', label: 'Full tablet', isChecked: true, isDisabled: true },
	{
		value: '0.5',
		label: 'Half of tablet',
		isChecked: false,
		isDisabled: false,
	},
	{
		value: '0.25',
		label: 'Quarter of tablet',
		isChecked: false,
		isDisabled: false,
	}
]

const today = new Date()
const today30 = new Date(today)
today30.setDate(today30.getDate()+ 30)

export const defData = {
	weeklyDose: 42.8,
	startDate: today.toLocaleDateString('lt-LT'),
	endDate: today30.toLocaleDateString('lt-LT'),
	medArr: [
		{
			id: uuidv4(),
			name: 'Warfarin grindex 5mg.',
			mg: 5,
			quantity: 100,
			splitParts: [1, 0.5],
			color: 'red',
		},
		{
			id: uuidv4(),
			name: 'Warfarin grindex 3mg.',
			mg: 3,
			quantity: 300,
			splitParts: [1, 0.5],
			color: 'blue',
		}
	],
}