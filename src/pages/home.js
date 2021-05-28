import MenuLineImg from '../images/menulines.svg'
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
import ProfileDropdown from '../components/ProfileDropdown'

const Home = () => {
	return (
		<div className="container my-4">
			{/* Home Header */}
			<div className="row my-4" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
				<div className="col-md-7 col-12 home_search">
					<img src={MenuLineImg} alt="menuImg" />
					<input className="search_input" placeholder="Bienvenue Alexandre, comment allez-vous aujourd’hui ? 😃" />
				</div>

				<div className="col-md-2 col-12">
					<ProfileDropdown />
				</div>
			</div>

			<hr style={{ border: '1px dashed #B8B8B8' }} />

			{/*? Synthèse impact ? */}
			<div className="mt-4 row " style={{ alignItems: 'center' }}>
				<h1>Synthèse impact</h1>
			</div>
			<div className="mt-1 row">
				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={HandHeart} value="40 gCO2" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={LayoutLine} value="2" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={AnticlockwiseLine} value="2" />
				</div>
			</div>

			<hr style={{ border: '1px dashed #B8B8B8' }} />

			{/* Progression */}
			<div className="mt-4 mb-2 row progression_section">
				<h1>
					Progression <div className="progression_value">60%</div>
				</h1>
			</div>

			<div className="row">
				<div className="col-lg-12">
					<ProgressBar done="60%" />
				</div>
			</div>

			<hr style={{ border: '1px dashed #B8B8B8' }} />

			{/* HUB Printee */}
			<div className="mt-4 row">
				<h1>HUB Printee</h1>
			</div>

			<div className="mt-1 row">
				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard heading="Périmètre" icon={LayoutLine} arrowLink={ArrowLink} />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard heading="Facteurs" icon={AnticlockwiseLine} arrowLink={ArrowLink} />{' '}
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard heading="Impact" icon={ImpactImg} arrowLink={ArrowLink} />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard heading="Rapport" icon={RapportImg} arrowLink={ArrowLink} />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard heading="Evaluation" icon={EvaluationImg} arrowLink={ArrowLink} />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard heading="Assistance" icon={HeadphoneImg} arrowLink={ArrowLink} />
				</div>
			</div>
		</div>
	)
}

export default Home
