import { Link } from 'react-router-dom'
import LayoutLine from '../images/perimeter.svg'

const ReportListCard = ({ reportName, editor, protocol, emissions }) => {
	return (
		<div className="mt-4 row reports_card">
			<div className="col-lg-4" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<div className="mx-2 icon_contaniner">
					<img src={LayoutLine} alt="img" />
				</div>
				<span className="px-3">{reportName}</span>
			</div>
			<div className="col-lg-2">{editor}</div>
			<div className="col-lg-2">{protocol}</div>
			<div className="col-lg-4">
				<div className="row">
					<div className="col-lg-4" style={{ display: 'flex', alignItems: 'center' }}>
						{emissions}
					</div>
					<div className="col-lg-8">
						<Link className="px-4" style={{ textDecoration: 'none', paddingTop: '10px', color: '#060E14', float: 'right' }}>
							x
						</Link>
						<button className="custom_btn" style={{ backgroundColor: '#132A3A', width: '73px', float: 'right' }}>
							Editer
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReportListCard
