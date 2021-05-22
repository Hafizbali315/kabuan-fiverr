import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/home'
import Login from './pages/login'

function App() {
	return (
		<div className="app">
			{/* <Router>
				<Switch>
					<Route exact path="/login" component={Login} />
					<div className="">
						<div className="row">
							<div className="col-2 position-sticky">
								<Sidebar />
							</div>

							<div className="col-10 main_section">
								<Route exact path="/" component={Home} />
							</div>
						</div>
					</div>
				</Switch>
			</Router> */}

			<Router>
				<Switch>
					<Route exact path="/login" component={Login} />

					<div className="row">
						<div className="col-2">
							<Sidebar />
						</div>

						<div className="col-10" style={{ backgroundColor: '#f9f9f9' }}>
							<Route exact path="/" component={Home} />
						</div>
					</div>
				</Switch>
			</Router>
		</div>
	)
}

export default App
