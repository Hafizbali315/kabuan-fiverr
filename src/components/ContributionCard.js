import image_fill from '../images/image-fill.svg'

const ContributionCard = ({ button1Text, button2Text, description, heading }) => {
	return (
		<div>
			<div className="card" style={{ height: '400px', position: 'relative' }}>
				<div style={{ height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e7e7e7' }}>
					<img src={image_fill} alt="..." />
				</div>
				<div className="card-body">
					<h4
						className="card-title"
						style={{ fontWeight: 600, fontSize: '16px', color: '#060E14', paddingRight: '30px', paddingTop: '10px' }}
					>
						{heading}
					</h4>
					<p className="card-text" style={{ fontSize: '14px', color: '#060E14', opacity: 0.5, paddingTop: '5px' }}>
						{description}
					</p>

					<div style={{ position: 'absolute', bottom: '10px' }}>
						<button
							style={{
								padding: '8px',
								color: '#ffffff',
								backgroundColor: '#63DDCF',
								borderRadius: '2px',
								outline: 'none',
								border: 'none',
								marginRight: '13px',
								fontSize: '11px',
								fontWeight: 600,
							}}
						>
							{button1Text}
						</button>
						<button
							style={{
								padding: '8px',
								color: '#ffffff',
								backgroundColor: '#63DDCF',
								borderRadius: '2px',
								outline: 'none',
								border: 'none',
								marginRight: '20px',
								fontSize: '11px',
								fontWeight: 600,
							}}
						>
							{button2Text}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContributionCard
