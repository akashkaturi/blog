// import Navbar from './Navbar/Navbar';
import Tables from './Tables/Table';
// import Footer from './Footer/Footer';
import { TableContent1, TableContent2 } from './TableContent1';
const About = () => {
	return (
		<div id='root'>
			
			<h1>About Page</h1>
			<div className='table-content'>
				<Tables items={TableContent1} />
				<Tables items={TableContent2} />
			</div>
		
		</div>
	);
};
export default About;
