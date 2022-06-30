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

export const defData = {
	weeklyDose: 42.2,
	startDate: '2020-01-01',
	endDate: '2020-06-30',
	medArr: [
		{
			id: uuidv4(),
			name: 'Warfarinum',
			mg: 5,
			quantity: 100,
			splitParts: [1, 0.5],
			color: 'red',
		},
	],

}