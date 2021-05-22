import Sidebar from '../components/Sidebar'

const Home = () => {
	return (
		<div className="home_container row">
			<div className="col-2">
				<Sidebar />
			</div>
			<div className="col-10">Home</div>
		</div>
	)
}

export default Home
