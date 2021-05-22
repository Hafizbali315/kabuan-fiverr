import ProgressDot from '../images/progressDot.svg'

const ProgressBar = ({ done }) => {
	return (
		<>
			<div className="progress_card">
				<div className="progress">
					<div className="progress_done" style={{ width: done }}></div>
				</div>
				<div className="progress_container">
					<ul>
						<li>
							<img src={ProgressDot} alt="img" />

							<p>Définir mon périmètre</p>
						</li>
						<li>
							<img src={ProgressDot} alt="img" />
							<p>Créer mon facteur</p>
						</li>
						<li>
							<img src={ProgressDot} alt="img" />
							<p>Ajouter un impact</p>
						</li>
						<li>
							<img src={ProgressDot} alt="img" />
							<p>Générer un rapport</p>
						</li>
						<li>
							<img src={ProgressDot} alt="img" />
							<p>Evaluer un action</p>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default ProgressBar
