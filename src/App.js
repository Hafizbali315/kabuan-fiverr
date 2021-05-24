import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import AddReport from './pages/addReport'
import Home from './pages/home'
import Login from './pages/login'
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
						</div>
					</div>
				</Switch>
			</Router>
		</div>
	)
}

export default App
