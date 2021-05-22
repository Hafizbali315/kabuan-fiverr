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
		<>
			{/* <div className="home_container">
			

				< className="mt-4 row">
					<div className="col col-4 ">
					</div>
					<div className="col col-4 ">
					</div>
					<div className="col col-4 ">
					</div>
				</>
			</div>
		</div> */}

			<div className="container my-4">
				{/* Home Header */}
				<div className="row home_header" style={{ justifyContent: 'space-between' }}>
					<div className="col-md-7 col-12 home_search">
						<img src={MenuLineImg} alt="menuImg" />
						<p>
							Bienvenue Alexandre, comment allez-vous aujourd’hui ? <img src={SmileyImg} alt="smileyImg" />
						</p>
					</div>

					<div className="col-md-2 col-12">
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
				</div>

				{/*? Synthèse impact ? */}
				<div className="row mt-4 " style={{ alignItems: 'center' }}>
					<h1>Synthèse impact</h1>
				</div>
				<div className="row mt-1">
					<div className="col-lg-6 col-xl-4 py-0 py-lg-3">
						<SmallCard text="Impact Total :" icon={HandHeart} value="40 gCO2" />
					</div>

					<div className="col-lg-6 col-xl-4 py-0 py-lg-3">
						<SmallCard text="Impact Total :" icon={LayoutLine} value="2" />
					</div>

					<div className="col-lg-6 col-xl-4 py-0 py-lg-3">
						<SmallCard text="Impact Total :" icon={AnticlockwiseLine} value="2" />
					</div>
				</div>

				{/* Progression */}
				<div className="row progression_section mt-4 mb-2">
					<h1>
						Progression <div className="progression_value">60%</div>
					</h1>
				</div>
				<ProgressBar done="60%" />

				{/* HUB Printee */}
				<div className="row mt-4">
					<h1>HUB Printee</h1>
				</div>

				<div className="row mt-1">
					<div className="col-lg-6 col-xl-4 py-0 py-lg-3">
						<SmallCard heading="Périmètre" icon={LayoutLine} arrowLink={ArrowLink} />
					</div>

					<div className="col-lg-6 col-xl-4 py-0 py-lg-3">
						<SmallCard heading="Facteurs" icon={AnticlockwiseLine} arrowLink={ArrowLink} />{' '}
					</div>

					<div className="col-lg-6 col-xl-4 py-0 py-lg-3">
						<SmallCard heading="Impact" icon={ImpactImg} arrowLink={ArrowLink} />
					</div>

					<div className="col-lg-6 col-xl-4 py-0 py-lg-3">
						<SmallCard heading="Rapport" icon={RapportImg} arrowLink={ArrowLink} />
					</div>

					<div className="col-lg-6 col-xl-4 py-0 py-lg-3">
						<SmallCard heading="Evaluation" icon={EvaluationImg} arrowLink={ArrowLink} />
					</div>

					<div className="col-lg-6 col-xl-4 py-0 py-lg-3">
						<SmallCard heading="Assistance" icon={HeadphoneImg} arrowLink={ArrowLink} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
