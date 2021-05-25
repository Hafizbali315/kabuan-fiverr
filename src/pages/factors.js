import { Link } from 'react-router-dom'
import ProfileDropdown from '../components/ProfileDropdown'

import FactorsCard from '../components/FactorsCard'

import MenuLineImg from '../images/menulines.svg'
import SearchIcon from '../images/search_icon.svg'

const Factors = () => {
	return (
		<div className="container my-4">
			<div className="row" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
				<div className="col-md-7 col-12 " style={{ display: 'flex', alignItems: 'center' }}>
					<img src={MenuLineImg} alt="menuImg" />
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					<img src={SearchIcon} alt="SearchIcon" />
					<p style={{ fontSize: '14px', color: '#060e14', paddingTop: '18px', paddingLeft: '25px', opacity: 0.5 }}>Rechercher un facteur</p>
				</div>

				<div className="col-md-2 col-12">
					<ProfileDropdown />
				</div>
			</div>

			{/* List of custom factors */}

			{/* Heading and Btn Row */}
			<div className="row mt-4" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
				<div className="col">
					<h1 style={{ display: 'flex', alignItems: 'center' }}>
						Liste des facteurs personnalisés <div className="total_reports">5</div>
					</h1>
				</div>
				<div className="col ">
					<Link to="/factors/add-factor">
						<button className="custom_btn" style={{ float: 'right', backgroundColor: '#63DDCF', padding: '16px' }}>
							Ajouter un facteur personnalisé
						</button>
					</Link>
				</div>
			</div>

			{/* Factor List Heading */}
			<div className="row mt-4 " style={{ fontWeight: '600', fontSize: '14px', color: '#060e14', opacity: 0.5 }}>
				<div className="col-lg-3 px-3">Type de facteur</div>
				<div className="col-lg-3">Impact</div>
				<div className="col-lg-2">Statut</div>
				<div className="col-lg-4">Emissions</div>
			</div>
			<div className="row mt-2">
				<div className="col-12">
					<FactorsCard typeOfFactor="Lorem ipsum" impact="1 second view front salto HD" structure="Validé" emissions="2.4800" />
				</div>
				<div className="col-12">
					<FactorsCard typeOfFactor="Lorem ipsum" impact="1 second view streaming frontsalto SD" structure="Certifié" emissions="2.4800" />
				</div>
				<div className="col-12">
					<FactorsCard typeOfFactor="Lorem ipsum" impact="1 mail marketing" structure="En attente" emissions="2.4800" />
				</div>
				<div className="col-12">
					<FactorsCard typeOfFactor="Lorem ipsum" impact="1 transaction abonnement" structure="En attente" emissions="2.4800" />
				</div>
				<div className="col-12">
					<FactorsCard typeOfFactor="Lorem ipsum" impact="1 requête plateforme" structure="En attente" emissions="2.4800" />
				</div>
			</div>
		</div>
	)
}

export default Factors
