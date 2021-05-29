import { Link } from 'react-router-dom'
import ProfileDropdown from '../components/ProfileDropdown'
import ReportListCard from '../components/ReportListCard'
import MenuLineImg from '../images/menulines.svg'
import SearchIcon from '../images/search_icon.svg'

const Reports = () => {
	return (
		<div className="container my-4">
			{/* Reports Header */}
			<div className="my-4 row reports_header" style={{ justifyContent: 'space-between' }}>
				<div className="col-md-7 col-12 reports_search">
					<img src={MenuLineImg} alt="menuImg" />
					&nbsp; &nbsp; &nbsp; &nbsp;
					<img src={SearchIcon} alt="SearchIcon" />
					<input type="text" placeholder="Rechercher un rapport" className="search_input" />
				</div>

				<div className="col-md-2 col-12">
					<ProfileDropdown />
				</div>
			</div>

			<hr style={{ border: '1px dashed #B8B8B8' }} />

			{/* List of Reports */}
			<div className="my-4  row reports_list">
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

			<hr style={{ border: '1px dashed #B8B8B8' }} />

			{/* Report Lists Cards Heading */}
			<div className="mt-4 row reports_list_heading">
				<div className="px-1 col-lg-4">Nom du rapport</div>
				<div className="col-lg-2">Editeur</div>
				<div className="col-lg-2">Protocole</div>
				<div className="col-lg-4">Emissions</div>
			</div>

			{/* Report Lists Cards */}
			<ReportListCard reportName="Paramètre digital" editor="Alexandre" protocol="GHG" emissions="2.4800" />
			<ReportListCard reportName="Bilan carbone annuel" editor="Nicolas" protocol="BC" emissions="2.4800" />
			<ReportListCard reportName="Rapport test" editor="Nicolas" protocol="ADEME" emissions="2.4800" />
			<ReportListCard reportName="Rapport physique" editor="Alexandre" protocol="GHG" emissions="2.4800" />
			<ReportListCard reportName="Rapport marketing" editor="Alexandre" protocol="ADEME" emissions="2.4800" />
		</div>
	)
}

export default Reports
