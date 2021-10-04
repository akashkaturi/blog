import './Footer.css';
const Footer = () => {
	const FooterItems = [
		{
			id: 1,
			title: 'Agent 007',
			url:''
		},
		{
			id: 2,
			title: 'Harry Potter',
		},
		{
			id: 3,
			title: 'Mission Impossible',
		},
		{
			id: 4,
			title: 'Money Heist',
		},
	];
	return (
		<footer className='foot'>
			<ul>
				{FooterItems.map((item) => {
					return <li key={item.id}>{item.title.toUpperCase()}</li>;
				})}
			</ul>
		</footer>
	);
};
export default Footer;
