import LoginImage from '../images/login.svg'
import EmailImg from '../images/account-circle-fill.svg'
import PasswordImg from '../images/lock-2-fill.svg'

const Login = () => {
	return (
		<div className="row loginRow">
			<div className="col loginImgCol">
				<img className="loginImg" src={LoginImage} alt="" />
			</div>

			<div className="col login_form_container ">
				<div className="login_form">
					<h1>KABAUN</h1>
					<h2>Identifiez-vous</h2>

					<form>
						<div className="loginInput">
							<input type="email" placeholder="Pseudo ou email" />
							<img src={EmailImg} alt="emailImg" />
						</div>

						<div className="loginInput">
							<input type="password" placeholder="Mot de passe " />
							<img src={PasswordImg} alt="passwordImg" />
							<p>Oublié?</p>
						</div>

						<div className="rememberCheck">
							<label className="checkContainer">
								Se souvenir de moi
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
						</div>

						<button className="loginBtn">Se connecter</button>

						<p className="signupLink">
							Pas de compte ? <span>Inscrivez-vous</span>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
