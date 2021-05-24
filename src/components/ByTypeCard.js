const ByTypeCard = () => {
	return (
		<div className="type_card p-4">
			<h2>Par Type</h2>
			<div className="type_card_details mt-3">
				<div className="type_color_line" style={{ backgroundColor: '#CFE2F3' }}></div>
				<h3>
					Numérique <span>(0%)</span>
				</h3>
			</div>

			<div className="type_card_details mt-1">
				<div className="type_color_line" style={{ backgroundColor: '#83E3D9' }}></div>
				<h3>
					Physique <span> (33.3%)</span>
				</h3>
			</div>

			<div className="type_card_details mt-1">
				<div className="type_color_line" style={{ backgroundColor: '#133C8E' }}></div>
				<h3>
					Transport <span> (33.3%)</span>
				</h3>
			</div>

			<div className="type_card_details mt-1">
				<div className="type_color_line" style={{ backgroundColor: '#FCE5CD' }}></div>
				<h3>
					Autre(s) <span> (33.3%)</span>
				</h3>
			</div>

			<button className="custom_btn mt-2" style={{ backgroundColor: '#132A3A' }}>
				Ajouter
			</button>
		</div>
	)
}

export default ByTypeCard
