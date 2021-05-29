import { Link } from 'react-router-dom'
import ProfileDropdown from '../components/ProfileDropdown'

import FactorsCard from '../components/FactorsCard'

import MenuLineImg from '../images/menulines.svg'
import SearchIcon from '../images/search_icon.svg'

import hr_line from '../images/hr_line.svg'

const Factors = () => {
	return (
		<div className="container my-4">
			<div className="my-4 row" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
				<div className="col-md-7 col-12 " style={{ display: 'flex', alignItems: 'center' }}>
					<img src={MenuLineImg} alt="menuImg" />
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					<img src={SearchIcon} alt="SearchIcon" />
					<input className="search_input" placeholder="Rechercher un facteur" />
				</div>

				<div className="col-md-2 col-12">
					<ProfileDropdown />
				</div>
			</div>

			<img src={hr_line} alt="hr_line" />

			{/* List of custom factors */}

			{/* Heading and Btn Row */}
			<div className="my-4 row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
				<div className="col">
					<h1 style={{ display: 'flex', alignItems: 'center' }}>
						Liste des facteurs personnalisés <div className="total_reports">5</div>
					</h1>
				</div>
				<div className="col ">
					<Link to="/factors/add-factor" style={{ textDecoration: 'none' }}>
						<button className="custom_btn" style={{ float: 'right', backgroundColor: '#63DDCF', padding: '16px' }}>
							Ajouter un facteur personnalisé
						</button>
					</Link>
				</div>
			</div>

			<img src={hr_line} alt="hr_line" />

			{/* Factors Card Heading */}
			<div className="mt-4 row " style={{ fontWeight: '600', fontSize: '14px', color: '#060e14', opacity: 0.5 }}>
				<div className="px-3 col-lg-3">Type de facteur</div>
				<div className="col-lg-3">Impact</div>
				<div className="col-lg-2">Statut</div>
				<div className="col-lg-4">Emissions</div>
			</div>

			{/* Factors Cards */}
			<div className="mt-2 row">
				<div className="col-12">
					<FactorsCard typeOfFactor="Lorem ipsum" impact="1 second view front salto HD" structure="Validé" emissions="2.4800" />
				</div>
				<div className="col-12">
					<FactorsCard
						typeOfFactor="Lorem ipsum"
						impact="1 second view streaming frontsalto SD"
						color="#63DDCF"
						structure="Certifié"
						emissions="2.4800"
					/>
				</div>
				<div className="col-12">
					<FactorsCard typeOfFactor="Lorem ipsum" impact="1 mail marketing" opacity="0.5" structure="En attente" emissions="2.4800" />
				</div>
				<div className="col-12">
					<FactorsCard
						typeOfFactor="Lorem ipsum"
						impact="1 transaction abonnement"
						structure="En attente"
						opacity="0.5"
						emissions="2.4800"
					/>
				</div>
				<div className="col-12">
					<FactorsCard typeOfFactor="Lorem ipsum" impact="1 requête plateforme" opacity="0.5" structure="En attente" emissions="2.4800" />
				</div>
			</div>
		</div>
	)
}

export default Factors
