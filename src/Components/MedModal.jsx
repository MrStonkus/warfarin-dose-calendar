import { useState } from 'react'

function MedModal() {
	const [medName, setMedName] = useState('')
	const [mg, setMg] = useState(0)
	const [quantity, setQuantity] = useState(0)
	const [color, setColor] = useState('')
	const [halfTablet, setHalfTablet] = useState(0)
	const [quaterTablet, setQuaterTablet] = useState(0)

	return (
		<form className="form">
			<div className="form-group">
				<label htmlFor="medName">Name of the medicine:</label>
				<input
					value={medName}
					onChange={(e) => setMedName(e.target.value)}
					placeholder="Medicine name"
					type="text"
					id="medName"
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="mg">Drug concentration (mg.):</label>
				<input
					value={mg}
					onChange={(e) => setMg(e.target.value)}
					placeholder="Mg per tablet"
					type="number"
					id="mg"
					style={{ width: '60px' }}
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="quantity">Amount of tablets:</label>
				<input
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
					placeholder="Quantity"
					type="number"
					id="quantity"
					style={{ width: '60px' }}
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="color">Color of tablets:</label>
				<input
					value={color}
					onChange={(e) => setColor(e.target.value)}
					placeholder="Color"
					type="text"
					id="color"
					required
				/>
			</div>

			<fieldset>
				<legend>Splits of the tablet</legend>
				
				<label>
					<input
						value={halfTablet}
						onChange={(e) => setHalfTablet((e) => !e)}
						type="checkbox"
						name="splitParts"
					/>
					<span>Half tablet</span>
				</label>
				<label>
					<input
						value={quaterTablet}
						onChange={(e) => setQuaterTablet((e) => !e)}
						type="checkbox"
						name="splitParts"
					/>
					<span>Quater of tablet</span>
				</label>
				
			</fieldset>
			<button type="submit">Submit</button>
		</form>
	)
}

export default MedModal
