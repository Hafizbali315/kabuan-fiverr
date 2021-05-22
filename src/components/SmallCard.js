const SmallCard = ({ text, value, icon, arrowLink, heading }) => {
	return (
		<div className="smallCard">
			<div className="row">
				<div className="col-2">
					<img src={icon} alt="Earth" />
				</div>

				<div className="col-5">{text ? <p>{text}</p> : heading && <h3>{heading}</h3>}</div>

				<div className="col-5 text-danger">
					{value ? (
						<h2 style={{ textAlign: 'right', paddingTop: '2px' }}>{value}</h2>
					) : (
						arrowLink && <img style={{ float: 'right' }} src={arrowLink} alt="img1" />
					)}
				</div>
			</div>
		</div>
	)
}

export default SmallCard
