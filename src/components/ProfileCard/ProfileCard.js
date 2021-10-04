import './ProfileCard.css';
import image from './image.jpg';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
const ProfileCard = (props) => {
	const [link, setLink] = useState(props.items[0].url)
	const redirect = () = {
		const ans = setLink(link),
		
	}
	const [count, setcount] = useState(props.items[0].count);
	console.log(count);
	const follow = () => {
		setcount(count + 1);
	};
	const unfollow = () => {
		if (count > 0) {
			setcount(count - 1);
		} else {
			setcount(0);
		}
	};
	return (
		<div>
			{props.items.map((item) => {
				return (
					<li key={item.id} className='pro-card'>
						<img className='image' src={image} alt='' />
						<p>
							{item.handle} {item.icon}
						</p>
						<p className='title'>{item.username}</p>
						<p>Followers Count: {count}</p>
						<button onClick={follow}>FOLLOW ME </button>
						<button className='unfollow-me' onClick={unfollow}>
							UNFOLLOW ME
						</button>
					</li>
				);
			})}
		</div>
	);
};
export default ProfileCard;
