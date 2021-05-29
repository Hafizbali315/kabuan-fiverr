import { Link } from 'react-router-dom'
import ProfileDropdown from '../components/ProfileDropdown'

import MenuLineImg from '../images/menulines.svg'

import VectorImg from '../images/vector.svg'
import ContributionCard from '../components/ContributionCard'

import hr_line from '../images/hr_line.svg'

const Contribution = () => {
	return (
		<div className="container my-4">
			{/* Contribution page header */}
			<div className="mt-4 mb-3 row" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
				<div className="col-md-7 col-12" style={{ display: 'flex', alignItems: 'center' }}>
					<img src={MenuLineImg} alt="menuImg" />
					<input className="search_input" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
				</div>

				<div className="col-md-2 col-12">
					<ProfileDropdown />
				</div>
			</div>

			<img src={hr_line} alt="hr_line" />

			{/* Contribute to a project */}

			{/* Header and Button */}
			<div className="my-2 row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
				<div className="col">
					<h1 style={{ display: 'flex', alignItems: 'center' }}>
						Contribuer à un projet{' '}
						<img style={{ paddingLeft: '15px', paddingTop: '2px', width: '40px', height: '40px' }} src={VectorImg} alt="img" />
					</h1>
				</div>
				<div className="col ">
					<Link to="/my-contributions" style={{ textDecoration: 'none' }}>
						<button className="custom_btn" style={{ float: 'right', backgroundColor: '#132A3A', padding: '16px' }}>
							Voir mes contributions
						</button>
					</Link>
				</div>
			</div>

			<img src={hr_line} alt="hr_line" />

			<div className="mt-4 row">
				<div className="col">
					<p style={{ fontSize: '14px', color: '#060E14', opacity: 0.5 }}> Nous avons repertorié 28 projets qui n’attendent que vous !</p>
				</div>
			</div>

			{/* Contribution Cards */}
			<div className=" row">
				<div className="mt-3 col-lg-4 col-md-6 col-12">
					<ContributionCard
						button1Text="Carbone"
						button2Text="Environnement"
						heading="Nii Kaniti : Saving the Peruvian Amazon"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					/>
				</div>

				<div className="mt-3 col-lg-4 col-md-6 col-12">
					<ContributionCard
						button1Text="Canada"
						button2Text="Carbone"
						heading="Sustainable Community for small business"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					/>
				</div>

				<div className="mt-3 col-lg-4 col-md-6 col-12">
					<ContributionCard
						button1Text="Français"
						button2Text="Economie"
						heading="A bank that pays you for climate action"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					/>
				</div>

				<div className="mt-3 col-lg-4 col-md-6 col-12">
					<ContributionCard
						button1Text="Carbone"
						button2Text="Environnement"
						heading="Nii Kaniti : Saving the Peruvian Amazon"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					/>
				</div>

				<div className="mt-3 col-lg-4 col-md-6 col-12">
					<ContributionCard
						button1Text="Canada"
						button2Text="Carbone"
						heading="Sustainable Community for small business"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					/>
				</div>

				<div className="mt-3 col-lg-4 col-md-6 col-12">
					<ContributionCard
						button1Text="Français"
						button2Text="Economie"
						heading="A bank that pays you for climate action"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					/>
				</div>
			</div>
		</div>
	)
}

export default Contribution
