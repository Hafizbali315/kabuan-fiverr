import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import AddFactors from './pages/addFactors'
import AddImpact from './pages/addImpact'
import AddPerimeter from './pages/addPerimeter'
import AddReport from './pages/addReport'
import Factors from './pages/factors'
import Home from './pages/home'
import Impacts from './pages/impacts'
import Login from './pages/login'
import Perimeter from './pages/perimeter'
import Reports from './pages/reports'

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/login" component={Login} />

					<div className="row">
						<div className="col-2">
							<Sidebar />
						</div>

						<div className="col-10" style={{ backgroundColor: '#f9f9f9' }}>
							<Route exact path="/" component={Home} />
							<Route exact path="/reports" component={Reports} />
							<Route exact path="/reports/add-report" component={AddReport} />
							<Route exact path="/perimeters" component={Perimeter} />
							<Route exact path="/perimeters/add-perimeter" component={AddPerimeter} />
							<Route exact path="/factors" component={Factors} />
							<Route exact path="/factors/add-factor" component={AddFactors} />
							<Route exact path="/impacts" component={Impacts} />
							<Route exact path="/impacts/add-impact" component={AddImpact} />
						</div>
					</div>
				</Switch>
			</Router>
		</div>
	)
}

export default App
