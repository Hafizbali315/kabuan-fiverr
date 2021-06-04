import { Link, useLocation } from 'react-router-dom'
import RapportImg from '../images/rapport.svg'
import PerimeterImg from '../images/perimeter.svg'
import featuresImg from '../images/facteurs.svg'
import ImpactImg from '../images/equalizer.svg'
import EvaluationImg from '../images/thumb.svg'
import EarthImg from '../images/earth2.svg'
import HeadphoneImg from '../images/headphone.svg'
import SettingImg from '../images/setting.svg'

const Sidebar = () => {
	const { pathname } = useLocation()

	const isActive = (pn) => {
		if (pn === pathname) {
			return 'activeLink'
		}
	}
	return (
		<div className="mt-4 sidebar container-fluid">
			<div className="row">
				<div className="col">
					<Link to="/" style={{ outline: 'none', textDecoration: 'none' }}>
						<h1>KABAUN</h1>
					</Link>
				</div>
			</div>

			<div className="my-4 row">
				<div className="col-12" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
					<Link className={`link_list ${isActive('/reports') || isActive('/reports/add-report')}`} to="/reports">
						<div className="rectangle"></div>
						<img src={RapportImg} alt="rapport" />
						Rapport
					</Link>
				</div>

				<div className="col-12" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
					<Link className={`link_list ${isActive('/perimeters') || isActive('/perimeters/add-perimeter')}`} to="/perimeters">
						<div className="rectangle"></div>
						<img src={PerimeterImg} alt="rapport" />
						Périmètre
					</Link>
				</div>

				<div className="col-12" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
					<Link className={`link_list ${isActive('/factors') || isActive('/factors/add-factor')}`} to="/factors">
						<div className="rectangle"></div>
						<img src={featuresImg} alt="rapport" />
						Facteurs
					</Link>
				</div>

				<div className="col-12" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
					<Link className={`link_list ${isActive('/impacts') || isActive('/impacts/add-impact')}`} to="/impacts">
						<div className="rectangle"></div>
						<img src={ImpactImg} alt="rapport" />
						Impact
					</Link>
				</div>

				<div className="col-12" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
					<Link className={`link_list ${isActive}`} to="/evaluation">
						<div className="rectangle"></div>
						<img src={EvaluationImg} alt="rapport" />
						Evaluation
					</Link>
				</div>

				<div className="col-12" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
					<Link className={`link_list ${isActive('/contribution')}`} to="/contribution">
						<div className="rectangle"></div>
						<img src={EarthImg} alt="EarthImg" />
						Contribution
					</Link>
				</div>

				<div className="col-12" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
					<Link className={`link_list ${isActive}`} to="/assistance">
						<div className="rectangle"></div>
						<img src={HeadphoneImg} alt="HeadphoneImg" />
						Assistance
					</Link>
				</div>

				<div className="col-12" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
					<Link className={`link_list ${isActive}`} to="/settings">
						<div className="rectangle"></div>
						<img src={SettingImg} alt="SettingImg" />
						Paramètres
					</Link>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div className="sidebar_footer">
						<h2>Kabaun</h2>
						<p>2021 - Tous droits réservés</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
