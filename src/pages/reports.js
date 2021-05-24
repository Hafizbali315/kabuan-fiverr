import { Link } from 'react-router-dom'
import ProfileDropdown from '../components/ProfileDropdown'
import SingleReportCard from '../components/SingleReportCard'
import MenuLineImg from '../images/menulines.svg'
import SearchIcon from '../images/search_icon.svg'
import SmileyImg from '../images/smiley.svg'

const Reports = () => {
	return (
		<div className="container my-4">
			{/* Reports Header */}
			<div className="row reports_header" style={{ justifyContent: 'space-between' }}>
				<div className="col-md-7 col-12 reports_search">
					<img src={MenuLineImg} alt="menuImg" />
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					<img src={SearchIcon} alt="SearchIcon" />
					<p>
						Bienvenue Alexandre, comment allez-vous aujourd’hui ? <img src={SmileyImg} alt="smileyImg" />
					</p>
				</div>

				<div className="col-md-2 col-12">
					<ProfileDropdown />
				</div>
			</div>

			{/* List of Reports */}
			<div className="row mt-5 reports_list">
				<div className="col">
					<h1>
						Liste des rapports <div className="total_reports">5</div>
					</h1>
				</div>
				<div className="col ">
					<Link to="/reports/add-report">
						<button className="custom_btn" style={{ float: 'right', backgroundColor: '#63DDCF' }}>
							Ajouter un rapport
						</button>
					</Link>
				</div>
			</div>
			<div className="row mt-4 reports_list_heading">
				<div className="col-lg-4 px-1">Nom du rapport</div>
				<div className="col-lg-2">Editeur</div>
				<div className="col-lg-2">Protocole</div>
				<div className="col-lg-4">Emissions</div>
			</div>

			<SingleReportCard reportName="Paramètre digital" editor="Alexandre" protocol="GHG" emissions="2.4800" />
			<SingleReportCard reportName="Bilan carbone annuel" editor="Nicolas" protocol="BC" emissions="2.4800" />
			<SingleReportCard reportName="Rapport test" editor="Nicolas" protocol="ADEME" emissions="2.4800" />
			<SingleReportCard reportName="Rapport physique" editor="Alexandre" protocol="GHG" emissions="2.4800" />
			<SingleReportCard reportName="Rapport marketing" editor="Alexandre" protocol="ADEME" emissions="2.4800" />
		</div>
	)
}

export default Reports
