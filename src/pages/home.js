import MenuLineImg from '../images/menulines.svg'
import SmallCard from '../components/SmallCard'
import hand_heart from '../images/hand_heart.svg'
import LayoutLine from '../images/perimeter.svg'
import AnticlockwiseLine from '../images/anticlockwise-line.svg'
import ProgressBar from '../components/ProgressBar'
import ArrowLink from '../images/arrowLink.svg'

import RapportImg from '../images/rapport.svg'
import ImpactImg from '../images/equalizer.svg'
import EvaluationImg from '../images/thumb.svg'
import HeadphoneImg from '../images/headphone.svg'
import ProfileDropdown from '../components/ProfileDropdown'

import hr_line from '../images/hr_line.svg'

const Home = () => {
	return (
		<div className="container my-4">
			{/* Home Header */}
			<div className="my-4 row" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
				<div className="col-md-7 col-12 home_search">
					<img src={MenuLineImg} alt="menuImg" />
					<input className="search_input" placeholder="Bienvenue Alexandre, comment allez-vous aujourd’hui ? 😃" />
				</div>

				<div className="col-md-2 col-12">
					<ProfileDropdown />
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/*? Synthèse impact ? */}
			<div className="mt-4 row " style={{ alignItems: 'center' }}>
				<h1>Synthèse impact</h1>
			</div>
			<div className="mt-1 row">
				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={hand_heart} value="40 gCO2" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={LayoutLine} value="2" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={AnticlockwiseLine} value="2" />
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* Progression */}
			<div className="my-4  row progression_section">
				<h1>
					Progression <div className="progression_value">60%</div>
				</h1>
			</div>

			<div className="row mt-4">
				<div className="col-lg-12">
					<ProgressBar done="60%" />
				</div>
			</div>

			<img src={hr_line} className="img-fluid" style={{ maxWidth: '100%' }} alt="hr_line" />

			{/* HUB Printee */}
			<div className="mt-4 row">
				<h1>HUB Printee</h1>
			</div>

			<div className="mt-1 row">
				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard pageRoute="/perimeters" heading="Périmètre" icon={LayoutLine} arrowLink={ArrowLink} />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard pageRoute="/factors" heading="Facteurs" icon={AnticlockwiseLine} arrowLink={ArrowLink} />{' '}
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard pageRoute="/impacts" heading="Impact" icon={ImpactImg} arrowLink={ArrowLink} />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard pageRoute="/reports" heading="Rapport" icon={RapportImg} arrowLink={ArrowLink} />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard pageRoute="/evaluation" heading="Evaluation" icon={EvaluationImg} arrowLink={ArrowLink} />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard pageRoute="/assistance" heading="Assistance" icon={HeadphoneImg} arrowLink={ArrowLink} />
				</div>
			</div>
		</div>
	)
}

export default Home
