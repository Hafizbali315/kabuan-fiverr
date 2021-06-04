import { Link } from 'react-router-dom'

import FactorsCard from '../components/FactorsCard'
import ProfileDropdown from '../components/ProfileDropdown'
import SmallCard from '../components/SmallCard'

import AnticlockwiseLine from '../images/anticlockwise-line.svg'
import HandHeart from '../images/hand-heart.svg'
import LayoutLine from '../images/perimeter.svg'
import MenuLineImg from '../images/menulines.svg'
import SearchIcon from '../images/search_icon.svg'

import hr_line from '../images/hr_line.svg'
import DropdownBtn from '../components/DropdownBtn'

const Perimeter = () => {
	return (
		<div className="container my-4">
			<div className="my-4 row perimeter_header" style={{ justifyContent: 'space-between' }}>
				<div className="col-md-7 col-12 perimeter_search">
					<img src={MenuLineImg} alt="menuImg" />
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					<img src={SearchIcon} alt="SearchIcon" />
					<input className="search_input" placeholder="Rechercher un périmètre" />
				</div>

				<div className="col-md-2 col-12">
					<ProfileDropdown />
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/*? Synthèse impact ? */}
			<div className="my-4 row " style={{ alignItems: 'center' }}>
				<div className="col">
					<h1>Liste des périmètres</h1>
				</div>

				<div className="col ">
					<Link to="/perimeters/add-perimeter" style={{ textDecoration: 'none' }}>
						<button className="custom_btn" style={{ float: 'right', backgroundColor: '#63DDCF' }}>
							Ajouter un rapport
						</button>
					</Link>
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			<div className="mt-4 row">
				<div className="col">
					<h1>Synthèse impact</h1>
				</div>
			</div>

			<div className="mt-3 row">
				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={HandHeart} value="40 gCO2" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={LayoutLine} value="2" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={AnticlockwiseLine} value="6" />
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* List of Impacts */}
			<div className="my-4 row">
				<div className="col-5">
					<h1 style={{ display: 'flex' }}>
						Liste des impacts <div className="total_reports">2</div>
					</h1>
				</div>
				<div className="col-7" style={{ display: 'flex', justifyContent: 'space-around' }}>
					{/* Buttons */}
					<DropdownBtn btnText="Type" />
					<DropdownBtn btnText="Localisation" />
					<DropdownBtn btnText="Activité" />
					<DropdownBtn btnText="Salariés" />
					<DropdownBtn btnText="Imputation" />
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* Impact List Card */}
			<div className="mt-4 row perimeter_list_heading">
				<div className="px-3 col-lg-3">Type de facteur</div>
				<div className="col-lg-3">Impact</div>
				<div className="col-lg-2">Structure</div>
				<div className="col-lg-4">Emissions</div>
			</div>

			{/* Factors Cards Row */}
			<div className="row">
				<FactorsCard typeOfFactor="Lorem Ipsum" impact="1 second view front salto HD" structure="Entreprise" emissions="2.4800" />

				<FactorsCard typeOfFactor="Lorem Ipsum" impact="1 second view front salto HD" structure="Entreprise" emissions="2.4800" />

				<FactorsCard typeOfFactor="Lorem Ipsum" impact="1 second view front salto HD" structure="Entreprise" emissions="2.4800" />
			</div>
		</div>
	)
}

export default Perimeter
