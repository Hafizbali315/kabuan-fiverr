import { Link } from 'react-router-dom'
import SmallCard from '../components/SmallCard'

import HandHeart from '../images/hand-heart.svg'
import LayoutLine from '../images/perimeter.svg'
import AnticlockwiseLine from '../images/anticlockwise-line.svg'

import file_edit_line from '../images/file-edit-line.svg'
import price_tag from '../images/price-tag-3-line.svg'
import FactorsCard from '../components/FactorsCard'

import hr_line from '../images/hr_line.svg'
import DropdownBtn from '../components/DropdownBtn'

const AddFactors = () => {
	return (
		<div className="container my-4">
			{/* Add factor header */}
			<div className="my-4 row">
				<div className="col-6" style={{ display: 'flex', alignItems: 'center' }}>
					<Link to="/factors" className="" style={{ textDecoration: 'none' }}>
						<button
							style={{ backgroundColor: '#132A3A', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
							className="custom_btn"
						>
							<span className="arrowLeft"></span> Retour
						</button>
					</Link>
					<input className="search_input" placeholder="Facteur personnalisé/id20199" />
				</div>
				<div className="col-6">
					<button style={{ float: 'right', backgroundColor: '#63DDCF' }} className="mt-2 custom_btn">
						Enregistrer
					</button>
					<button style={{ float: 'right', backgroundColor: '#132A3A', color: '#ffffff', margin: '0 15px' }} className="mt-2 custom_btn">
						Générer l’API
					</button>
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/*? Synthèse impact ? */}
			<div className="my-4 row " style={{ alignItems: 'center' }}>
				<h1>Synthèse impact</h1>
			</div>
			<div className="my-1 row">
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

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* General Information Heading and Buttons */}
			<div className="my-4 row">
				<div className="col-8" style={{ display: 'flex', alignItems: 'center' }}>
					<h1>Information générale</h1>
				</div>
				<div className="col-4" style={{ display: 'flex', justifyContent: 'space-around' }}>
					<DropdownBtn btnText="Scope" />
					<DropdownBtn btnText="Périmètre" />
					<DropdownBtn btnText="Type" />
				</div>
			</div>

			{/* General Information Cards */}
			<div className="my-4 row">
				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<div className="md_card_container">
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div className="icon_contaniner">
								<img src={price_tag} alt="img" />
							</div>
							<span className="px-3" style={{ fontWeight: '500', fontSize: '12px' }}>
								Nom du facteur impact :
							</span>
						</div>
						<div>
							<input className="md_card_input" type="text" placeholder="Aucun nom" />
						</div>
					</div>
				</div>

				<div className="mt-2 col-lg-6 col-12 mt-md-0">
					<div className="md_card_container">
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div className="icon_contaniner">
								<img src={file_edit_line} alt="img" />
							</div>
							<span className="px-3" style={{ fontWeight: '500', fontSize: '12px' }}>
								Ajouter un tag :
							</span>
						</div>
						<div>
							<datalist id="feature_md_2">
								<option>Option 1</option>
								<option>Option 2</option>
								<option>Option 3</option>
							</datalist>
							<input list="feature_md_2" className="md_card_input" type="text" placeholder="Aucun tag" />
						</div>
					</div>
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* Composition */}
			<div className="my-4 row">
				<h1>Composition</h1>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* Factors Card Headings */}
			<div className="mt-4 row " style={{ fontWeight: '600', fontSize: '14px', color: '#060e14', opacity: 0.5 }}>
				<div className="px-3 col-lg-3">Type de facteur</div>
				<div className="col-lg-3">Facteur d’émission</div>
				<div className="col-lg-2">Source</div>
				<div className="col-lg-4">Emissions</div>
			</div>

			{/* Factors Cards */}
			<div className="my-4 row">
				<div className="col-12">
					<FactorsCard typeOfFactor="Lorem ipsum" impact="Electricité" structure="ADEME" emissions="2.4800" />
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			<div className="my-4 row">
				<div className="col">
					<button style={{ backgroundColor: '#63DDCF' }} className="mt-2 custom_btn">
						Enregistrer
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddFactors
