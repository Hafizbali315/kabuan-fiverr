import { Link } from 'react-router-dom'
import LayoutLine from '../images/perimeter.svg'

const ReportListCard = ({ reportName, editor, protocol, emissions }) => {
	return (
		<div className="row mt-4 reports_card">
			<div className="col-4" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<div className="icon_contaniner mx-2">
					<img src={LayoutLine} alt="img" />
				</div>
				<span className="px-3">{reportName}</span>
			</div>
			<div className="col-2">{editor}</div>
			<div className="col-2">{protocol}</div>
			<div className="col-4">
				<div className="row">
					<div className="col-7" style={{ display: 'flex', alignItems: 'center' }}>
						{emissions}
					</div>
					<div className="col-5" style={{ float: 'right' }}>
						<button className="custom_btn" style={{ backgroundColor: '#132A3A', width: '73px' }}>
							Editer
						</button>
						<Link className="px-4" style={{ textDecoration: 'none', color: '#060E14' }}>
							x
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReportListCard
