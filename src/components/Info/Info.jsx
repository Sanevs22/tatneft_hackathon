import { Input } from '../UI/Input/Input';
import st from './Info.module.scss';

export const Info = () => {
	return (
		<div className={st.info}>
			<h2 className={st.title}>Справочная информация</h2>
			<div className={st.wrapper}>
				<Input placeholder='Введите текст' />
			</div>
		</div>
	);
};
