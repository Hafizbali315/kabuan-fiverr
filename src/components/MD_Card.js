const MD_Card = ({ icon, cardBackgroundColor, textColor, value, text }) => {
	return (
		<div
			style={{
				backgroundColor: cardBackgroundColor,
				height: '75px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				borderRadius: '3px',
				padding: '0 17px',
				color: textColor,
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="icon_contaniner">
					<img src={icon} alt="img" />
				</div>
				<span className="px-3" style={{ fontWeight: '500', fontSize: '12px' }}>
					{text}
				</span>
			</div>
			<div style={{ fontWeight: '600', fontSize: '13px' }}>{value}</div>
		</div>
	)
}

export default MD_Card
