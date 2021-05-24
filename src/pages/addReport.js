import { Link } from 'react-router-dom'
import SmallCard from '../components/SmallCard'
import HandHeart from '../images/hand-heart.svg'
import LayoutLine from '../images/perimeter.svg'
import AnticlockwiseLine from '../images/anticlockwise-line.svg'
import BarChart from '../components/BarChart'
import ByTypeCard from '../components/ByTypeCard'
import ArrowChart from '../components/ArrowChart'
import FactorsListCard from '../components/FactorsListCard'

const AddReport = () => {
	return (
		<div className="container mt-4">
			{/* Add Report Header */}
			<div className="row">
				<div className="col-6" style={{ display: 'flex', alignItems: 'center' }}>
					<Link to="/reports" className="">
						<button style={{ backgroundColor: '#132A3A', height: '40px' }} className="custom_btn">
							<span className="arrowLeft"></span> Retour
						</button>
					</Link>
					<p style={{ fontWeight: 'normal', fontSize: '14', color: '#060E14', opacity: '0.5', paddingTop: '17px', paddingLeft: '30px' }}>
						Rapport/id20199
					</p>
				</div>
				<div className="col-6">
					<button style={{ float: 'right', backgroundColor: '#63DDCF', height: '40px' }} className="custom_btn">
						Enregistrer
					</button>
				</div>
			</div>

			{/* Synthèse impact */}
			<div className="row mt-5">
				<div className="col-7">
					<h1>Synthèse impact</h1>
				</div>
				<div className="col-5" style={{ display: 'flex', justifyContent: 'space-around' }}>
					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Protocole <span className="arrowDownSm"></span>
					</button>
					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Périmètre <span className="arrowDownSm"></span>
					</button>
					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Protocole <span className="arrowDownSm"></span>
					</button>
					<button className="custom_btn" style={{ backgroundColor: '#132A3A' }}>
						Export rapide
					</button>
				</div>
			</div>

			<div className="row mt-4">
				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={HandHeart} value="40 gCO2" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={LayoutLine} value="2" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={AnticlockwiseLine} value="2" />
				</div>
			</div>

			{/* Graphs */}
			<div className="row mt-2">
				<div className="col-5">
					<BarChart />
				</div>

				{/* By Type Card */}
				<div className="col-3">
					<ByTypeCard />
				</div>

				{/* Arrow Chart */}
				<div className="col-4">
					<ArrowChart />
				</div>
			</div>

			{/* List of Factors */}
			<div className="row mt-5 reports_list">
				<h1>
					Liste des facteurs <div className="total_reports">2</div>
				</h1>
			</div>

			<div className="row mt-4 factors_list_headeings">
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
