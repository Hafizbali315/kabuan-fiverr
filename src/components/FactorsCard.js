import { Link } from 'react-router-dom'
import FactorsIcon from '../images/delete_icon.svg'

const FactorsCard = ({ typeOfFactor, impact, structure, emissions }) => {
	return (
		<div className="row mt-4 impact_card">
			<div className="col-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<div className="icon_contaniner mx-2">
					<img src={FactorsIcon} alt="img" />
				</div>
				<span className="px-3">{typeOfFactor}</span>
			</div>
			<div className="col-3">{impact}</div>
			<div className="col-2">{structure}</div>
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

export default FactorsCard
