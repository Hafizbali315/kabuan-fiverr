import ProfileImg from '../images/profileImg.png'

const ProfileDropdown = () => {
	return (
		<div className="profileDropdown">
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
		</div>
	)
}

export default ProfileDropdown
