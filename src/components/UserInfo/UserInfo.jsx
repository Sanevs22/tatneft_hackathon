import st from './UserInfo.module.scss';

export const UserInfo = () => {
	return (
		<div className={st.userinfo}>
			<div className={st.wrapper}>
				<span className={st.greeting}>Добрый день!</span>
				<span className={st.user}>Олег Петрович</span>
			</div>
		</div>
	);
};
