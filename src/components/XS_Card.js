const XSCard = ({ icon, text, cardBackgroundColor, textColor, onClick }) => {
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
			className="xs_card"
			onClick={onClick}
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
