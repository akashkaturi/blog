import HomePage from './components/HomePage';
import About from './components/About';
import More from './components/More';
import FollowMe from './components/FollowMe';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './App.css';
// import { Router } from 'express';
import { Route } from 'react-router-dom';
const App = () => {
	return (
		<div className='content-container'>
			<Navbar />
			<div>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/about' component={About} />
				<Route exact path='/more' component={More} />
				<Route exact path='/follow-me' component={FollowMe} />
			</div>
			<Footer />
		</div>
	);
};

export default App;
