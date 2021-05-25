import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import RapportImg from '../images/rapport.svg'
import PerimeterImg from '../images/perimeter.svg'
import VectorImg from '../images/vector.svg'
import ImpactImg from '../images/equalizer.svg'
import EvaluationImg from '../images/thumb.svg'
import EarthImg from '../images/earth.svg'
import HeadphoneImg from '../images/headphone.svg'
import SettingImg from '../images/setting.svg'

const Sidebar = () => {
	const { pathname } = useLocation()

	const isActive = (pn) => {
		if (pn === pathname) return 'activeLink'
	}
	return (
		<div className="sidebar">
			<Link to="/" style={{ outline: 'none', textDecoration: 'none' }}>
				<h1>KABAUN</h1>
			</Link>

			<div className="sidebarLinks">
				<Link className={`linkList ${isActive('/reports') || isActive('/reports/add-report')}`} to="/reports">
					<img src={RapportImg} alt="rapport" />
					Rapport
				</Link>

				<Link className={`linkList ${isActive('/perimeters') || isActive('/perimeters/add-perimeter')}`} to="/perimeters">
					<img src={PerimeterImg} alt="perimeter" />
					Périmètre
				</Link>

				<Link className={`linkList ${isActive('/factors') || isActive('/factors/add-factor')}`} to="/factors">
					<img src={VectorImg} alt="vector" />
					Facteurs
				</Link>

				<Link className={`linkList ${isActive}`} to="/impact">
					<img src={ImpactImg} alt="impact" />
					Impact
				</Link>

				<Link className={`linkList ${isActive}`} to="/evaluation">
					<img src={EvaluationImg} alt="Evaluation" />
					Evaluation
				</Link>

				<Link className={`linkList ${isActive}`} to="/contribution">
					<img src={EarthImg} alt="EarthImg" />
					Contribution
				</Link>

				<Link className={`linkList ${isActive}`} to="/assistance">
					<img src={HeadphoneImg} alt="HeadphoneImg" />
					Assistance
				</Link>

				<Link className={`linkList ${isActive}`} to="/setting">
					<img src={SettingImg} alt="SettingImg" />
					Paramètres
				</Link>
			</div>

			<div className="sidebarFooter">
				<h2>Kabaun</h2>
				<p>2021 - Tous droits réservés</p>
			</div>
		</div>
	)
}

export default Sidebar
