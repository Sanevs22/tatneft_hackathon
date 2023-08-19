import st from './App.module.scss';
import Toggle from '../UI/Toggle/Toggle';
import { useState } from 'react';

function App() {
	const [toggle, setToggle] = useState(true);

	return (
		<div className={st.App}>
			<Toggle state={toggle} onClick={setToggle}></Toggle>
		</div>
	);
}

export default App;
