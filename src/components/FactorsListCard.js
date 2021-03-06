import FactorsIcon from '../images/delete_icon.svg'

// This component needs to update

const FactorsListCard = () => {
	return (
		<div className="my-3 row factors_card">
			<div className="col-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<div className="mx-2 icon_contaniner">
					<img src={FactorsIcon} alt="img" />
				</div>
				<span className="px-3">Lorem ipsum</span>
			</div>
			<div className="col-3">1 second view front salto HD</div>
			<div className="col-2">Entreprise</div>
			<div className="col-4">
				<div className="row">
					<div className="col-5" style={{ display: 'flex', alignItems: 'center' }}>
						2.4800
					</div>
					<div className="col-7" style={{ float: 'right' }}>
						<button className="custom_btn" style={{ backgroundColor: '#F9F9F9', color: '#000000', fontWeight: '700', fontSize: '10.99px' }}>
							Plus d’informations
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FactorsListCard
