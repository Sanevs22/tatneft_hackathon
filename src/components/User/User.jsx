import st from './User.module.scss';

export const User = ({ imgUrl, user, position }) => {
	return (
		<div className={st.user}>
			<img src={imgUrl} alt={user} className={st.img} />
			<div className={st.wrapper}>
				<span className={st.username}>{user}</span>
				<span className={st.position}>{position}</span>
			</div>
		</div>
	);
};
