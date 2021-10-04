import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
	const Menuitems = [
		{
			id: 1,
			title: 'Home',
			url: '/',
			cName: 'nav-link',
			fName: 'homePageHandler',
		},
		{
			id: 2,
			title: 'About',
			url: '/about',
			cName: 'nav-link',
			fName: 'aboutPageHandler',
		},
		{
			id: 3,
			title: 'More',
			url: '/more',
			cName: 'nav-link',
			fName: 'aboutPageHandler',
		},
		{
			id: 4,
			title: 'Follow Me',
			url: '/follow-me',
			cName: 'nav-link',
			fName: 'aboutPageHandler',
		},
	];

	return (
		<nav>
			<div className='menu-logo'>
				<h1 className='logo'>AkWeb</h1>
			</div>
			<div className='second'>
				<ul className='nav-links'>
					{Menuitems.map((item) => {
						return (
							<li key={item.id}>
								{/* <a className={item.cName} href={item.url}>
									{item.title.toUpperCase()}
								</a> */}
								<Link to={item.url} className={item.cName}>
									{item.title.toUpperCase()}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;
