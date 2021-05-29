const DropdownBtn = ({ btnText }) => {
	return (
		<div className="dropdown">
			<button className="custom_btn" id="dropdownMenuLink" style={{ color: 'black', backgroundColor: '#FFFFFF' }} data-toggle="dropdown">
				{btnText} <span className="arrowDownSm"></span>
			</button>

			<div class="dropdown-menu" style={{ marginTop: '10px' }}>
				<a className="dropdown-item" href="#1">
					Action
				</a>
				<a className="dropdown-item" href="#2">
					Another action
				</a>
				<a className="dropdown-item" href="#3">
					Something else here
				</a>
			</div>
		</div>
	)
}

export default DropdownBtn
