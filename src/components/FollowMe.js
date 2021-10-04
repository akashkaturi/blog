// import Navbar from './Navbar/Navbar';
// import Footer from './Footer/Footer';
import ProfileCard from './ProfileCard/ProfileCard';
const FollowMe = () => {
	const Linkedin = [
		{
			id: 1,
			handle: 'Linkedin',
			username: 'akash-katuri',
			icon: <i class='fab fa-linkedin'></i>,
			url: 'https://www.instagram.com/akash_katuri/',
			count: 60,
		},
	];
	const Twitter = [
		{
			id: 2,
			handle: 'Twitter',
			username: '@akash_katuri',
			icon: <i class='fab fa-twitter'></i>,
			url: 'https://www.instagram.com/akash_katuri/',
			count: 29,
		},
	];
	const Instagram = [
		{
			id: 3,
			handle: 'Instagram',
			username: 'akashkaturi_924',
			icon: <i class='fab fa-instagram'></i>,
			url: 'https://github.com/facebook/react/',
			count: 433,
		},
	];
	return (
		<div>
			<h1>Follow-Me page</h1>
			<ul className='follow-me'>
				<ProfileCard items={Linkedin} />
				<ProfileCard items={Instagram} />
				<ProfileCard items={Twitter} />
			</ul>
		</div>
	);
};
export default FollowMe;
