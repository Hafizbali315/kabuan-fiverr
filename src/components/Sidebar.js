import React from 'react'
import { Link } from 'react-router-dom'
import RapportImg from '../images/rapport.svg'
import PerimeterImg from '../images/perimeter.svg'
import VectorImg from '../images/vector.svg'
import ImpactImg from '../images/equalizer.svg'
import EvaluationImg from '../images/thumb.svg'
import EarthImg from '../images/earth.svg'
import HeadphoneImg from '../images/headphone.svg'
import SettingImg from '../images/setting.svg'

const Sidebar = () => {
	return (
		<div className="sidebar">
			<h1>KABAUN</h1>

			<div className="sidebarLinks">
				<Link className="linkList" to="/rapport">
					<img src={RapportImg} alt="rapport" />
					Rapport
				</Link>

				<Link className="linkList" to="/perimeter">
					<img src={PerimeterImg} alt="perimeter" />
					Périmètre
				</Link>

				<Link className="linkList" to="/factors">
					<img src={VectorImg} alt="vector" />
					Facteurs
				</Link>

				<Link className="linkList" to="/impact">
					<img src={ImpactImg} alt="impact" />
					Impact
				</Link>

				<Link className="linkList" to="/evaluation">
					<img src={EvaluationImg} alt="Evaluation" />
					Evaluation
				</Link>

				<Link className="linkList" to="/contribution">
					<img src={EarthImg} alt="EarthImg" />
					Contribution
				</Link>

				<Link className="linkList" to="/assistance">
					<img src={HeadphoneImg} alt="HeadphoneImg" />
					Assistance
				</Link>

				<Link className="linkList" to="/setting">
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
