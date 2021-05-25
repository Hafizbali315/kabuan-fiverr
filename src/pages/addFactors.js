import { Link } from 'react-router-dom'
import SmallCard from '../components/SmallCard'
import MDCard from '../components/MD_Card'

import HandHeart from '../images/hand-heart.svg'
import LayoutLine from '../images/perimeter.svg'
import AnticlockwiseLine from '../images/anticlockwise-line.svg'

import file_edit_line from '../images/file-edit-line.svg'
import price_tag from '../images/price-tag-3-line.svg'
import FactorsCard from '../components/FactorsCard'

const AddFactors = () => {
	return (
		<div className="container my-4">
			{/* Add factor header */}
			<div className="row">
				<div className="col-6" style={{ display: 'flex', alignItems: 'center' }}>
					<Link to="/factors" className="">
						<button style={{ backgroundColor: '#132A3A' }} className="custom_btn">
							<span className="arrowLeft"></span> Retour
						</button>
					</Link>
					<p style={{ fontSize: '14px', color: '#060e14', paddingTop: '18px', paddingLeft: '25px', opacity: 0.5 }}>
						Facteur personnalisé/id20199
					</p>
				</div>
				<div className="col-6">
					<button style={{ float: 'right', backgroundColor: '#63DDCF' }} className="custom_btn mt-2">
						Enregistrer
					</button>
					<button style={{ float: 'right', backgroundColor: '#132A3A', color: '#ffffff', margin: '0 15px' }} className="custom_btn mt-2">
						Générer l’API
					</button>
				</div>
			</div>

			{/*? Synthèse impact ? */}
			<div className="mt-5 row " style={{ alignItems: 'center' }}>
				<h1>Synthèse impact</h1>
			</div>
			<div className="mt-1 row">
				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={HandHeart} value="40 gCO2" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Incertitude :" icon={LayoutLine} value="25%" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Nombre facteurs :" icon={AnticlockwiseLine} value="2" />
				</div>
			</div>

			{/* General Information Heading and Buttons */}
			<div className="row mt-5">
				<div className="col-8" style={{ display: 'flex', alignItems: 'center' }}>
					<h1>Information générale</h1>
				</div>
				<div className="col-4" style={{ display: 'flex', justifyContent: 'space-around' }}>
					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Scope <span className="arrowDownSm"></span>
					</button>
					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Périmètre <span className="arrowDownSm"></span>
					</button>
					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Type <span className="arrowDownSm"></span>
					</button>
				</div>
			</div>

			{/* General Information Cards */}
			<div className="row mt-3">
				<div className="col-lg-6 col-12 mt-md-0 mt-2">
					<MDCard icon={price_tag} cardBackgroundColor="#FFFFFF" textColor="#000000" value="Aucun nom" text="Nom du facteur impact :" />
				</div>

				<div className="col-lg-6  col-12 mt-md-0 mt-2">
					<MDCard icon={file_edit_line} cardBackgroundColor="#FFFFFF" textColor="#000000" value="Aucun tag" text="Ajouter un tag :" />
				</div>
			</div>

			{/* Composition */}
			<div className="row mt-5">
				<h1>Composition</h1>
			</div>

			{/* Factors Card Headings */}
			<div className="row mt-5 " style={{ fontWeight: '600', fontSize: '14px', color: '#060e14', opacity: 0.5 }}>
				<div className="col-lg-3 px-3">Type de facteur</div>
				<div className="col-lg-3">Facteur d’émission</div>
				<div className="col-lg-2">Source</div>
				<div className="col-lg-4">Emissions</div>
			</div>

			{/* Factors Cards */}
			<div className="row">
				<div className="col-12">
					<FactorsCard typeOfFactor="Lorem ipsum" impact="Electricité" structure="ADEME" emissions="2.4800" />
				</div>
			</div>
		</div>
	)
}

export default AddFactors
