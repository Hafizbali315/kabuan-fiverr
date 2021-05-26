import { Link } from 'react-router-dom'
import XSCard from '../components/XS_Card'
import MDCard from '../components/MD_Card'

import Remote_Control_line from '../images/remote-control-line.svg'
import Swap_Box_Line from '../images/swap-box-line.svg'
import map_line from '../images/map-2-line.svg'
import navigation_line from '../images/navigation-line.svg'
import price_tag from '../images/price-tag-3-line.svg'
import bill_line from '../images/bill-line.svg'
import dvd_line from '../images/dvd-line.svg'
import account_circle from '../images/account-circle-line.svg'
import contacts_line from '../images/contacts-line.svg'

const AddPerimeter = () => {
	return (
		<div className="container mt-4">
			{/* Add perimeter header */}
			<div className="row">
				<div className="col-6" style={{ display: 'flex', alignItems: 'center' }}>
					<Link to="/perimeters" className="">
						<button style={{ backgroundColor: '#132A3A' }} className="custom_btn">
							<span className="arrowLeft"></span> Retour
						</button>
					</Link>
					<p style={{ fontWeight: 'normal', fontSize: '14', color: '#060E14', opacity: '0.5', paddingTop: '17px', paddingLeft: '30px' }}>
						Périmètre/id20199
					</p>
				</div>
				<div className="col-6">
					<button style={{ float: 'right', backgroundColor: '#63DDCF' }} className="mt-2 custom_btn">
						Enregistrer
					</button>
				</div>
			</div>

			{/* Type of perimeter */}
			<div className="mt-5 row">
				<div className="col">
					<h1>Type de périmètre</h1>
				</div>
			</div>
			<div className="mt-3 row">
				<div className="mt-2 col-lg-3 col-md-6 col-12 mt-lg-0">
					<XSCard icon={Remote_Control_line} text="Enterprice" cardBackgroundColor="#000000" textColor="#FFFFFF" />
				</div>

				<div className="mt-2 col-lg-3 col-md-6 mt-lg-0 col-12">
					<XSCard icon={Swap_Box_Line} text="Enterprice" cardBackgroundColor="#FFFFFF" textColor="#000000" />
				</div>

				<div className="mt-2 col-lg-3 col-md-6 col-12 mt-lg-0">
					<XSCard icon={map_line} text="Enterprice" cardBackgroundColor="#FFFFFF" textColor="#000000" />
				</div>

				<div className="mt-2 col-lg-3 col-md-6 col-12 mt-lg-0">
					<XSCard icon={navigation_line} text="Enterprice" cardBackgroundColor="#FFFFFF" textColor="#000000" />
				</div>
			</div>

			{/* General Information */}
			<div className="mt-5 row">
				<div className="col">
					<h1>Information générale</h1>
				</div>
			</div>
			<div className="mt-3 row">
				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<MDCard icon={price_tag} cardBackgroundColor="#FFFFFF" textColor="#000000" value="Plateforme" text="Nom du périmètre :" />
				</div>

				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<MDCard icon={map_line} cardBackgroundColor="#FFFFFF" textColor="#000000" value="Boulogne Billancourt" text="Localisation :" />
				</div>
			</div>

			{/* Activity information */}
			<div className="mt-5 row">
				<div className="col">
					<h1>Information d’activité</h1>
				</div>
			</div>
			<div className="mt-3 row">
				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<MDCard icon={bill_line} cardBackgroundColor="#FFFFFF" text="Type d’activité :" textColor="#000000" value="Numérique" />
				</div>

				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<MDCard icon={dvd_line} cardBackgroundColor="#FFFFFF" textColor="#000000" value="Fioul" text="Type d’activité :" />
				</div>
			</div>

			{/* Employee  information */}
			<div className="mt-5 row">
				<div className="col">
					<h1>Information salariés</h1>
				</div>
			</div>
			<div className="mt-3 mb-4 row">
				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<MDCard icon={account_circle} cardBackgroundColor="#FFFFFF" text="Nombre de salariés : :" textColor="#000000" value="150" />
				</div>

				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<MDCard icon={contacts_line} cardBackgroundColor="#FFFFFF" textColor="#000000" text="Pourcentage télétravail :" value="15%" />
				</div>
			</div>
		</div>
	)
}

export default AddPerimeter
