import { Link } from 'react-router-dom'
import XSCard from '../components/XS_Card'

import Remote_Control_line from '../images/remote-control-line.svg'
import Swap_Box_Line from '../images/swap-box-line.svg'
import map_line from '../images/map-2-line.svg'
import navigation_line from '../images/navigation-line.svg'
import price_tag from '../images/price-tag-3-line.svg'
import bill_line from '../images/bill-line.svg'
import dvd_line from '../images/dvd-line.svg'
import account_circle from '../images/account-circle-line.svg'
import contacts_line from '../images/contacts-line.svg'

import hr_line from '../images/hr_line.svg'
import { useState } from 'react'

const AddPerimeter = () => {
	const [selectedId, setSelectedId] = useState(null)
	const [intValue, setIntValue] = useState()
	const [floatVal, setFloatVal] = useState()

	const XS_Card_Data = [
		{ id: 1, icon: Remote_Control_line, text: 'Enterprice' },
		{ id: 2, icon: Swap_Box_Line, text: 'Enterprice' },
		{ id: 3, icon: map_line, text: 'Enterprice' },
		{ id: 4, icon: navigation_line, text: 'Enterprice' },
	]

	const changeToInt = (e) => {
		setIntValue(parseInt(e.target.value))
	}

	const changeToFloat = (e) => {
		e.preventDefault()

		const { value } = e.target
		const x = parseFloat(value)
		const preVal = x.toFixed(1)
		setFloatVal(preVal)
	}

	return (
		<div className="container mt-4">
			{/* Add perimeter header */}
			<div className="my-4 row">
				<div className="col-6" style={{ display: 'flex', alignItems: 'center' }}>
					<Link to="/perimeters" className="" style={{ textDecoration: 'none' }}>
						<button
							style={{ backgroundColor: '#132A3A', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
							className="custom_btn"
						>
							<span className="arrowLeft"></span> Retour
						</button>
					</Link>
					<input className="search_input" placeholder="Périmètre/id20199" />
				</div>
				<div className="col-6">
					<button style={{ float: 'right', backgroundColor: '#63DDCF' }} className="mt-2 custom_btn">
						Enregistrer
					</button>
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* Type of perimeter */}
			<div className="my-4 row">
				<div className="col">
					<h1>Type de périmètre</h1>
				</div>
			</div>
			<div className="mt-3 mb-4 row">
				{XS_Card_Data.map((card) => (
					<div className="mt-2 col-lg-3 col-md-6 col-12 mt-lg-0">
						<XSCard
							key={card.id}
							onClick={() => setSelectedId(card.id)}
							cardBackgroundColor={selectedId && selectedId === card.id ? '#000000' : '#ffffff'}
							textColor={selectedId && selectedId === card.id ? '#ffffff' : '#000000'}
							icon={card.icon}
							text={card.text}
						/>
					</div>
				))}
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* General Information */}
			<div className="my-4 row">
				<div className="col">
					<h1>Information générale</h1>
				</div>
			</div>
			<div className="mt-3 mb-4 row">
				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<div className="md_card_container">
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div className="icon_contaniner">
								<img src={price_tag} alt="img" />
							</div>
							<span className="px-3" style={{ fontWeight: '500', fontSize: '12px' }}>
								Nom du périmètre :
							</span>
						</div>
						<div>
							<input className="md_card_input" type="text" placeholder="Plateforme" />
						</div>
					</div>
				</div>

				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<div className="md_card_container">
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div className="icon_contaniner">
								<img src={map_line} alt="img" />
							</div>
							<span className="px-3" style={{ fontWeight: '500', fontSize: '12px' }}>
								Localisation :
							</span>
						</div>
						<div>
							<datalist id="locations">
								<option>Location 1</option>
								<option>Location 2</option>
								<option>Location 3</option>
							</datalist>
							<input list="locations" className="md_card_input" type="text" placeholder="Boulogne Billancourt" />
						</div>
					</div>
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* Activity information */}
			<div className="my-4 row">
				<div className="col">
					<h1>Information d’activité</h1>
				</div>
			</div>
			<div className="mt-3 mb-4 row">
				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<div className="md_card_container">
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div className="icon_contaniner">
								<img src={bill_line} alt="img" />
							</div>
							<span className="px-3" style={{ fontWeight: '500', fontSize: '12px' }}>
								Type d’activité :
							</span>
						</div>
						<div>
							<datalist id="digital">
								<option>Option 1</option>
								<option>Option 2</option>
								<option>Option 3</option>
							</datalist>
							<input list="digital" className="md_card_input" type="text" placeholder="Numérique" />
						</div>
					</div>
				</div>

				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<div className="md_card_container">
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div className="icon_contaniner">
								<img src={dvd_line} alt="img" />
							</div>
							<span className="px-3" style={{ fontWeight: '500', fontSize: '12px' }}>
								Type d’activité :
							</span>
						</div>
						<div>
							<datalist id="fuelList">
								<option>Option 1</option>
								<option>Option 2</option>
								<option>Option 3</option>
							</datalist>
							<input list="fuelList" className="md_card_input" type="text" placeholder="Fioul" />
						</div>
					</div>
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* Employee  information */}
			<div className="my-4 row">
				<div className="col">
					<h1>Information salariés</h1>
				</div>
			</div>
			<div className="mt-3 mb-4 row">
				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<div className="md_card_container">
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div className="icon_contaniner">
								<img src={account_circle} alt="img" />
							</div>
							<span className="px-3" style={{ fontWeight: '500', fontSize: '12px' }}>
								Nombre de salariés :
							</span>
						</div>
						<div>
							<input className="md_card_input" value={intValue} type="number" placeholder="150" onChange={changeToInt} />
						</div>
					</div>
				</div>

				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<div className="md_card_container">
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div className="icon_contaniner">
								<img src={contacts_line} alt="img" />
							</div>
							<span className="px-3" style={{ fontWeight: '500', fontSize: '12px' }}>
								Pourcentage télétravail :
							</span>
						</div>
						<div style={{ fontWeight: '600', fontSize: '13px' }}>
							<input className="md_card_input" value={floatVal} type="number" step="0.1" placeholder="15" onChange={changeToFloat} /> %
						</div>
					</div>
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			<div className="my-4 row">
				<div className="col">
					<button style={{ backgroundColor: '#63DDCF' }} className=" custom_btn">
						Enregistrer
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddPerimeter
