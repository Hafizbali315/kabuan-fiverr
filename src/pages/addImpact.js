import { Link } from 'react-router-dom'
import XSCard from '../components/XS_Card'

import base_station_line from '../images/base-station-line.svg'
import shopping_cart_line from '../images/shopping-cart-line.svg'
import navigation_line from '../images/navigation-line.svg'
import recycle_line from '../images/recycle-line.svg'
import exchange_dollar_line from '../images/exchange-dollar-line.svg'
import bus_line from '../images/bus-2-line.svg'
import dvd_line from '../images/dvd-line.svg'
import add_circle_line from '../images/add-circle-line.svg'
import FactorsCard from '../components/FactorsCard'

import hr_line from '../images/hr_line.svg'
import { useState } from 'react'
import DropdownBtn from '../components/DropdownBtn'

const AddImpact = () => {
	const [selectedId, setSelectedId] = useState(null)

	const XS_Card_Data = [
		{ id: 1, icon: base_station_line, text: 'Digital' },
		{ id: 2, icon: shopping_cart_line, text: 'E-commerce' },
		{ id: 3, icon: navigation_line, text: 'Logistique' },
		{ id: 4, icon: recycle_line, text: 'Recyglage' },
		{ id: 5, icon: exchange_dollar_line, text: 'Finance' },

		{ id: 6, icon: bus_line, text: 'Transport' },
		{ id: 7, icon: dvd_line, text: 'Energie' },
		{ id: 8, icon: add_circle_line, text: 'Vos idées' },
	]

	return (
		<div className="container my-4">
			{/* Add Impact header */}
			<div className="my-4 row">
				<div className="col-6" style={{ display: 'flex', alignItems: 'center' }}>
					<Link to="/impacts" className="" style={{ textDecoration: 'none' }}>
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

			{/* Type the impact */}
			<div className="mt-4 row">
				<div className="col">
					<h1>Type d’impact</h1>
				</div>
			</div>
			<div className="mt-3 mb-4 row">
				{XS_Card_Data.map((card) => (
					<div className="mt-3 col-lg-3 col-md-6 col-12" key={card.id}>
						<XSCard
							text={card.text}
							icon={card.icon}
							cardBackgroundColor={selectedId && selectedId === card.id ? '#000000' : '#ffffff'}
							textColor={selectedId && selectedId === card.id ? '#ffffff' : '#000000'}
							onClick={() => setSelectedId(card.id)}
						/>
					</div>
				))}
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* Composition Header and Buttons */}
			<div className="my-4 row">
				<div className="col-8" style={{ display: 'flex', alignItems: 'center' }}>
					<h1>Composition</h1>
				</div>
				<div className="col-4" style={{ display: 'flex', justifyContent: 'space-around' }}>
					{/* Buttons */}
					<DropdownBtn btnText="Scope" />
					<DropdownBtn btnText="Périmètre" />
					<DropdownBtn btnText="Imputation" />
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* Composition Card Heading */}
			<div className="mt-4 row " style={{ fontWeight: '600', fontSize: '14px', color: '#060e14', opacity: 0.5 }}>
				<div className="px-3 col-lg-3">Type de facteur</div>
				<div className="col-lg-3">Impact</div>
				<div className="col-lg-2">Imputation</div>
				<div className="col-lg-4">Emissions</div>
			</div>
			<div className="mb-4 row">
				<div className="col-12">
					<FactorsCard typeOfFactor="Lorem ipsum" impact="1 second view front salto HD" structure="Date" emissions="2.4800" />
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* Record Button */}
			<div className="mt-4 row">
				<div className="col">
					<button className="custom_btn" style={{ backgroundColor: '#63DDCF' }}>
						Enregistrer
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddImpact
