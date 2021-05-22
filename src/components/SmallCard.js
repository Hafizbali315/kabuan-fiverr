const SmallCard = ({ text, value, icon, arrowLink, heading }) => {
	return (
		<div className="smallCard">
			<div className="icon_container">
				<img src={icon} alt="Earth" />
			</div>

			{text ? <p>{text}</p> : heading && <h3>{heading}</h3>}

			{value ? <h2>{value}</h2> : arrowLink && <img src={arrowLink} alt="img1" />}
		</div>
	)
}

export default SmallCard
