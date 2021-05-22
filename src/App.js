import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Login from './pages/login'

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>
			{/* <Login /> */}
		</div>
	)
}

export default App
