import ProfileImg from '../images/profileImg.png'

const ProfileDropdown = () => {
	return (
		<div className="profileDropdown dropdown">
			<button
				className=""
				type="button"
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

			{/* <button
				className="btn btn-secondary dropdown-toggle"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
				Hello
			</button> */}

			<div className="dropdown-menu " style={{ marginTop: '15px' }} aria-labelledby="dropdownMenuButton">
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
					<h6>Link 1</h6>
					<h6>Link 2</h6>
					<h6>Link 3</h6>
					<h6>Link 4</h6>
				</div>
			</div>
		</div>
	)
}

export default ProfileDropdown
