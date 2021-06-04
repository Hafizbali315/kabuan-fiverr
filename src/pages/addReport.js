import { Link } from 'react-router-dom'
import SmallCard from '../components/SmallCard'
import hand_heart from '../images/hand_heart.svg'
import LayoutLine from '../images/perimeter.svg'
import AnticlockwiseLine from '../images/anticlockwise-line.svg'
import BarChart from '../components/BarChart'
import ByTypeCard from '../components/ByTypeCard'
import ArrowChart from '../components/ArrowChart'
import FactorsListCard from '../components/FactorsListCard'

import hr_line from '../images/hr_line.svg'
import DropdownBtn from '../components/DropdownBtn'

const AddReport = () => {
	return (
		<div className="container mt-4">
			{/* Add Report Header */}
			<div className="my-4 row">
				<div className="col-6" style={{ display: 'flex', alignItems: 'center' }}>
					<Link to="/reports" className="" style={{ textDecoration: 'none' }}>
						{/* <input type="button" value=" Hello" className="custom_btn" style={{ backgroundColor: '#132A3A', height: '40px' }} /> */}
						<button
							style={{ backgroundColor: '#132A3A', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
							className="custom_btn"
						>
							<span className="arrowLeft"></span> Retour
						</button>
					</Link>
					<input type="text" className="search_input" placeholder="Impact/id20199" />
				</div>
				<div className="col-6">
					<button style={{ float: 'right', backgroundColor: '#63DDCF', height: '40px' }} className="custom_btn">
						Enregistrer
					</button>
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* Synthèse impact */}
			<div className="my-4 row">
				<div className="col-6">
					<h1>Synthèse impact</h1>
				</div>
				<div className="col-6" style={{ display: 'flex', justifyContent: 'space-around' }}>
					<DropdownBtn btnText="Protocole" />
					<DropdownBtn btnText="Périmètre" />
					<DropdownBtn btnText="Protocole" />

					<button className="custom_btn" style={{ backgroundColor: '#132A3A' }}>
						Export rapide
					</button>
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			<div className="my-3 row">
				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={hand_heart} value="40 gCO2" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={LayoutLine} value="2" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={AnticlockwiseLine} value="2" />
				</div>
			</div>

			{/* Graphs */}
			<div className="mb-4 row">
				<div className="col-lg-5 col-12">
					<BarChart />
				</div>

				{/* By Type Card */}
				<div className="col-lg-3 col-12">
					<ByTypeCard />
				</div>

				{/* Arrow Chart */}
				<div className="col-lg-4 col-12">
					<ArrowChart />
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* List of Factors */}
			<div className="mt-4 mb-3 row reports_list">
				<h1>
					Liste des facteurs <div className="total_reports">2</div>
				</h1>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			<div className="mt-4 row factors_list_headeings">
				<div className="col-lg-3">Type de facteur</div>
				<div className="col-lg-3">Impact</div>
				<div className="col-lg-2">Structure</div>
				<div className="col-lg-4">Emissions</div>
			</div>

			<FactorsListCard />
			<FactorsListCard />
		</div>
	)
}

export default AddReport
