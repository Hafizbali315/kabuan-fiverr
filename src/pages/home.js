import MenuLineImg from '../images/menulines.svg'
import SmileyImg from '../images/smiley.svg'
import ProfileImg from '../images/profileImg.png'
import SmallCard from '../components/SmallCard'
import HandHeart from '../images/hand-heart.svg'
import LayoutLine from '../images/perimeter.svg'
import AnticlockwiseLine from '../images/anticlockwise-line.svg'
import ProgressBar from '../components/ProgressBar'
import ArrowLink from '../images/arrowLink.svg'

import RapportImg from '../images/rapport.svg'
import ImpactImg from '../images/equalizer.svg'
import EvaluationImg from '../images/thumb.svg'
import HeadphoneImg from '../images/headphone.svg'

const Home = () => {
	return (
		<div className="home_container">
			<div className="profile_bar">
				<div className="menuIcon">
					<img src={MenuLineImg} alt="menuImg" />
					<p>
						Bienvenue Alexandre, comment allez-vous aujourd’hui ? <img src={SmileyImg} alt="smileyImg" />
					</p>
				</div>

				<div className="profileDropdown">
					<div className="imgContainer">
						<img src={ProfileImg} alt="profileImg" style={{ backgroundColor: '#ffffff' }} />
					</div>
					<div className="profileName">
						<h6>Alexandre</h6>
						<span>Alexandre</span>
					</div>
					<div className="dropdownIcon">
						<i className="arrowDown" />
					</div>
				</div>
			</div>

			<div className="hr_line"></div>

			<div className="synthetic_impact">
				<h1>Synthèse impact</h1>
				<div className="row ">
					<div className="col col-4 ">
						<SmallCard text="Impact Total :" icon={HandHeart} value="40 gCO2" />
					</div>
					<div className="col col-4">
						<SmallCard text="Nombre périmètre :" value="2" icon={LayoutLine} />
					</div>
					<div className="col col-4">
						<SmallCard text="Nombre de facteurs :" value="2" icon={AnticlockwiseLine} />
					</div>
				</div>
			</div>

			<div className="hr_line"></div>

			<div className="progression_container">
				<h1>
					Progression <div className="progression_value">60%</div>
				</h1>
				<ProgressBar done="60%" />
			</div>

			<div className="hr_line"></div>
			<div className="printer_section">
				<h1>HUB Printee</h1>
				<div className="row">
					<div className="col col-4 ">
						<SmallCard heading="Périmètre" icon={LayoutLine} arrowLink={ArrowLink} />
					</div>
					<div className="col col-4 ">
						<SmallCard heading="Facteurs" icon={AnticlockwiseLine} arrowLink={ArrowLink} />
					</div>
					<div className="col col-4 ">
						<SmallCard heading="Impact" icon={ImpactImg} arrowLink={ArrowLink} />
					</div>
				</div>

				<div className="mt-4 row">
					<div className="col col-4 ">
						<SmallCard heading="Rapport" icon={RapportImg} arrowLink={ArrowLink} />
					</div>
					<div className="col col-4 ">
						<SmallCard heading="Evaluation" icon={EvaluationImg} arrowLink={ArrowLink} />
					</div>
					<div className="col col-4 ">
						<SmallCard heading="Assistance" icon={HeadphoneImg} arrowLink={ArrowLink} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
