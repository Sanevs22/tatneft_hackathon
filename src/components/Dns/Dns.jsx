import st from './Dns.module.scss';
import LevelBar from '../UI/LevelBar/LevelBar';
import img_1 from '../../accets/img_1.png';
import Toggle from '../UI/Toggle/Toggle';
import { useState } from 'react';

function Dns({ status, max }) {
	let [state, setState] = useState(false);
	let [open, setOpen] = useState(false);

	return (
		<div>
			<div className={st.close}>
				<div className={st.pos}>
					<div
						className={st.card}
						onClick={() => {
							setOpen(!open);
						}}
					>
						<div className={st.flex}>
							<div>
								<div className={st.title}>ДНС 3</div>
								<img src={img_1} alt='title img' />
							</div>
							<LevelBar className={st.level} title={'Объем'} status={status} max={max} />
						</div>
						<div className={st.tools}>
							<Toggle state={state} onClick={setState}></Toggle>
							Включить насос
						</div>
					</div>
				</div>
			</div>

			{open ? (
				<div className={st.open}>
					<div className={st.bg}></div>
					<div className={st.pos}>
						<div
							className={st.card}
							onClick={() => {
								setOpen(!open);
							}}
						>
							<div className={st.flex}>
								<img src={img_1} alt='title img' />

								<div>
									<div className={st.title}>ДНС 3</div>
									<div>Информация об объекте контакты оперативного персонала</div>
								</div>
							</div>
							<div className={st.tools}>
								<Toggle state={state} onClick={setState}></Toggle>
								Включить насос
							</div>
							<div className={st.tools_flex}>
								<div>Входной контур</div>
								<LevelBar className={st.level} title={'Объем'} status={40} />
								<div>Выходной контур</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default Dns;
