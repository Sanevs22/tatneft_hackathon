import User from '../User';
import st from './UserInfo.module.scss';

export const UserInfo = () => {
	return (
		<div className={st.userinfo}>
			<div className={st.wrapper}>
				<span className={st.greeting}>Добрый день!</span>
				<span className={st.user}>Галина Петровна</span>
			</div>
			<User imgUrl='https://placekitten.com/300/300' user='Галина Петровна' position='Старший инженер' />
		</div>
	);
};
