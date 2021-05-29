import { Link } from 'react-router-dom'

import FactorsCard from '../components/FactorsCard'
import ProfileDropdown from '../components/ProfileDropdown'
import SmallCard from '../components/SmallCard'

import AnticlockwiseLine from '../images/anticlockwise-line.svg'
import hand_heart from '../images/hand_heart.svg'

import LayoutLine from '../images/perimeter.svg'
import MenuLineImg from '../images/menulines.svg'
import SearchIcon from '../images/search_icon.svg'

import hr_line from '../images/hr_line.svg'
import DropdownBtn from '../components/DropdownBtn'

const Impacts = () => {
	return (
		<div className="container my-4">
			<div className="my-4 row perimeter_header" style={{ justifyContent: 'space-between' }}>
				<div className="col-md-7 col-12 perimeter_search">
					<img src={MenuLineImg} alt="menuImg" />
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					<img src={SearchIcon} alt="SearchIcon" />
					<input className="search_input" placeholder="Rechercher un impact" />
				</div>

				<div className="col-md-2 col-12">
					<ProfileDropdown />
				</div>
			</div>

			<img src={hr_line} alt="hr_line" />

			{/*? Synthèse impact ? */}
			<div className="my-4 row " style={{ alignItems: 'center' }}>
				<div className="col">
					<h1>Liste des impacts</h1>
				</div>

				<div className="col ">
					<Link to="/impacts/add-impact" style={{ textDecoration: 'none' }}>
						<button className="custom_btn" style={{ float: 'right', backgroundColor: '#63DDCF' }}>
							Ajouter un impact
						</button>
					</Link>
				</div>
			</div>

			<img src={hr_line} alt="hr_line" />

			<div className="my-4 row">
				<div className="col">
					<h1>Synthèse impact</h1>
				</div>
			</div>
			<div className="mt-1 row">
				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={hand_heart} value="40 gCO2" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Incertitude :" icon={LayoutLine} value="25%" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Nombre facteurs :" icon={AnticlockwiseLine} value="2" />
				</div>
			</div>

			<img src={hr_line} alt="hr_line" />

			{/* List of Impacts */}
			<div className="my-4 row">
				<div className="col-5">
					<h1 style={{ display: 'flex' }}>
						Liste des facteurs <div className="total_reports">2</div>
					</h1>
				</div>
				<div className="col-7" style={{ display: 'flex', justifyContent: 'space-around' }}>
					<DropdownBtn btnText="Status" />
					<DropdownBtn btnText="Scope" />
					<DropdownBtn btnText="Périmètre" />
					<DropdownBtn btnText="Type" />
					<DropdownBtn btnText="Imputation" />
				</div>
			</div>

			<img src={hr_line} alt="hr_line" />

			{/* Impact List Card */}
			<div className="mt-4 row perimeter_list_heading">
				<div className="px-3 col-lg-3">Type de facteur</div>
				<div className="col-lg-3">Impact</div>
				<div className="col-lg-2">Struct</div>
				<div className="col-lg-4">Emissions</div>
			</div>
			{/* Factors Cards Row */}
			<div className="row">
				<FactorsCard typeOfFactor="Lorem Ipsum" impact="1 second view front salto HD" structure="Validé" emissions="2.4800" />

				<FactorsCard
					typeOfFactor="Lorem Ipsum"
					impact="1 second view streaming front salto SD"
					opacity="0.5"
					structure="En attente"
					emissions="2.4800"
				/>

				<FactorsCard typeOfFactor="Lorem Ipsum" impact="1 requête plateforme" structure="En attente" opacity="0.5" emissions="2.4800" />
			</div>
		</div>
	)
}

export default Impacts
