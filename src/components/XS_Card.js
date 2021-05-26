const XSCard = ({ icon, text, cardBackgroundColor, textColor }) => {
	return (
		<div
			style={{
				backgroundColor: cardBackgroundColor,
				height: '75px',
				display: 'flex',
				alignItems: 'center',
				borderRadius: '3px',
				padding: '0 17px',
				color: textColor,
			}}
		>
			<div className="icon_contaniner">
				<img src={icon} alt="img" />
			</div>
			<span className="px-3" style={{ fontWeight: '600', fontSize: '14px' }}>
				{text}
			</span>
		</div>
	)
}

export default XSCard
