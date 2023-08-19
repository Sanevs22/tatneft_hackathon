import st from './Main.module.scss';

export const Main = ({ children }) => {
	return <main className={st.main}>{children}</main>;
};
