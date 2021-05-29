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

const AddImpact = () => {
	return (
		<div className="container my-4">
			{/* Add Impact header */}
			<div className="my-4 row">
				<div className="col-6" style={{ display: 'flex', alignItems: 'center' }}>
					<Link to="/impacts" className="">
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

			<hr style={{ border: '1px dashed #B8B8B8' }} />

			{/* Type the impact */}
			<div className="mt-4 row">
				<div className="col">
					<h1>Type d’impact</h1>
				</div>
			</div>
			<div className="mt-3 mb-4 row">
				<div className="mt-3 col-lg-3 col-md-6 col-12">
					<XSCard text="Digital" icon={base_station_line} cardBackgroundColor="#FFFFFF" textColor="#000000" />
				</div>

				<div className="mt-3 col-lg-3 col-md-6 col-12">
					<XSCard text="E-commerce" icon={shopping_cart_line} cardBackgroundColor="#FFFFFF" textColor="#000000" />
				</div>

				<div className="mt-3 col-lg-3 col-md-6 col-12">
					<XSCard text="Logistique" icon={navigation_line} cardBackgroundColor="#000000" textColor="#FFFFFF" />
				</div>

				<div className="mt-3 col-lg-3 col-md-6 col-12">
					<XSCard text="Recyglage" icon={recycle_line} cardBackgroundColor="#FFFFFF" textColor="#000000" />
				</div>

				<div className="mt-3 col-lg-3 col-md-6 col-12">
					<XSCard text="Finance" icon={exchange_dollar_line} cardBackgroundColor="#FFFFFF" textColor="#000000" />
				</div>

				<div className="mt-3 col-lg-3 col-md-6 col-12">
					<XSCard text="Transport" icon={bus_line} cardBackgroundColor="#FFFFFF" textColor="#000000" />
				</div>

				<div className="mt-3 col-lg-3 col-md-6 col-12">
					<XSCard text="Energie" icon={dvd_line} cardBackgroundColor="#FFFFFF" textColor="#000000" />
				</div>

				<div className="mt-3 col-lg-3 col-md-6 col-12">
					<XSCard text="Vos idées" icon={add_circle_line} cardBackgroundColor="#FFFFFF" textColor="#000000" />
				</div>
			</div>

			<hr style={{ border: '1px dashed #B8B8B8' }} />

			{/* Composition Header and Buttons */}
			<div className="my-4 row">
				<div className="col-8" style={{ display: 'flex', alignItems: 'center' }}>
					<h1>Composition</h1>
				</div>
				<div className="col-4" style={{ display: 'flex', justifyContent: 'space-around' }}>
					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Scope <span className="arrowDownSm"></span>
					</button>
					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Périmètre <span className="arrowDownSm"></span>
					</button>
					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Imputation <span className="arrowDownSm"></span>
					</button>
				</div>
			</div>

			<hr style={{ border: '1px dashed #B8B8B8' }} />

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

			<hr style={{ border: '1px dashed #B8B8B8' }} />

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
