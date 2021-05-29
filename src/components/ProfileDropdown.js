import ProfileImg from '../images/profileImg.png'

const ProfileDropdown = () => {
	return (
		<div className="profileDropdown dropdown">
			<button
				className=""
				id="dropdownMenuButton"
				data-toggle="dropdown"
				style={{
					outline: 'none',
					width: '200px',
					backgroundColor: '#f9f9f9',
					display: 'flex',
					flexDirection: 'row',
					border: 'none',
					marginTop: '10px',
				}}
			>
				<div className="imgContainer">
					<img src={ProfileImg} alt="profileImg" style={{ backgroundColor: '#ffffff' }} />
				</div>
				<div className="profileName">
					<h6>Alexandre</h6>
					<span>Alexandre</span>
				</div>
				<div className="dropdownIcon">
					<i className="arrowDown" />
				</div>
			</button>

			<div className="dropdown-menu " style={{ marginTop: '15px' }} aria-labelledby="dropdownMenuButton">
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
					<a className="dropdown-item" href="#1">
						Link1
					</a>

					<a className="dropdown-item" href="#1">
						Link2
					</a>

					<a className="dropdown-item" href="#1">
						Link3
					</a>
				</div>
			</div>

			{/* <div class="dropdown-menu" style={{ marginTop: '10px' }}>
				<a className="dropdown-item" href="#1">
					Action
				</a>
				<a className="dropdown-item" href="#2">
					Another action
				</a>
				<a className="dropdown-item" href="#3">
					Something else here
				</a>
			</div> */}
		</div>
	)
}

export default ProfileDropdown
