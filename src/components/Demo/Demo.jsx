import st from './Demo.module.scss';
import { useState, useEffect } from 'react';

import LevelBab from '../UI/LevelBar/LevelBar';
import Pipe from '../UI/Pipe/Pipe';

import Toggle from '../UI/Toggle/Toggle';

function Demo() {
	let [timer, setTimer] = useState(0);

	let [scw1Start, setScw1Start] = useState(false);
	let [scw2Start, setScw2Start] = useState(false);
	let [scw3Start, setScw3Start] = useState(false);

	let [max1, setMax1] = useState(70);
	let [max2, setMax2] = useState(70);
	let [max3, setMax3] = useState(70);

	let [inpt1, setInpt1] = useState(70);
	let [inpt2, setInpt2] = useState(70);
	let [inpt3, setInpt3] = useState(70);

	let [pipe, setPipe] = useState(0);

	let [v1, setV1] = useState(0);
	let [v2, setV2] = useState(0);
	let [v3, setV3] = useState(0);

	let level1 = (v1 / 400) * 100;
	let level2 = (v2 / 300) * 100;
	let level3 = (v3 / 400) * 100;

	const algoGraf = () => {
		if (scw1Start) {
			if (max1 * 400 > max2 * 300) {
				setMax1(max1 - 1);
			} else if (scw2Start) {
				setMax2(max2 - 1);
			}
		}
		if (scw2Start) {
			if (max2 * 400 > max3 * 400) {
				setMax2(max2 - 1);
			} else if (scw3Start) {
				setMax3(max3 - 1);
			}
		}
		if (scw3Start) {
			if (max3 * 400 > max1 * 400) {
				setMax3(max3 - 1);
			} else if (scw1Start) {
				setMax1(max1 - 1);
			}
		}
	};
	// объем трубы
	let levelPipe = (pipe / 300) * 100;

	const inPipe = (value) => {
		setPipe(pipe + value);
	};

	useEffect(() => {
		setTimeout(() => {
			if (timer >= 23) {
				setTimer(0);
			} else {
				setTimer(timer + 1);
			}
			if (scw1Start) {
				dnsStatus1();
			}
			if (scw2Start) {
				dnsStatus2();
			}
			if (scw3Start) {
				dnsStatus3();
			}
		}, 250);
		setTimeout(() => {
			if (scw1Start) {
				dnsStatus1();
			}
			if (scw2Start) {
				dnsStatus2();
			}
			if (scw3Start) {
				dnsStatus3();
			}
		}, 500);
		setTimeout(() => {
			if (scw1Start) {
				dnsStatus1();
			}
			if (scw2Start) {
				dnsStatus2();
			}
			if (scw3Start) {
				dnsStatus3();
			}
		}, 750);
		setTimeout(() => {
			if (scw1Start) {
				dnsStatus1();
			}
			if (scw2Start) {
				dnsStatus2();
			}
			if (scw3Start) {
				dnsStatus3();
			}
			if (pipe > 16) {
				setPipe((pipe) => pipe - 16);
				if (levelPipe > 90) {
					algoGraf();
				}
			}
		}, 1000);
	}, [timer]);

	if (level1 > max1) {
		let value = (v1 - 10 * 4) / 4;
		inPipe(value);
		setV1(10 * 4);
	}

	if (level2 > max2) {
		let value = (v2 - 10 * 3) / 4;
		inPipe(value);

		setV2(10 * 3);
	}

	if (level3 > max3) {
		let value = (v3 - 10 * 4) / 4;
		inPipe(value);
		setV3(10 * 4);
	}

	const dnsStatus1 = () => {
		setV1(v1 + data.dns_1[timer] / 4);
	};
	const dnsStatus2 = () => {
		setV2(v2 + data.dns_2[timer] / 4);
	};
	const dnsStatus3 = () => {
		setV3(v3 + data.dns_3[timer] / 4);
	};

	return (
		<div className={st.main}>
			<div className={st.top_flex}>
				<div className={st.timer}>
					август 2023 <br /> время: {timer} часов
				</div>
				<div>Это демонстрационный стенд, модель расчетов условна и не отражает финального решения</div>
			</div>

			<div className={st.demo_contaner}>
				<div className={st.skw1}>
					<Skw header='ДНС 1' data={{ date: data.dns_1[timer] }} scwStart={scw1Start} setScwStart={setScw1Start} />
					{/* <input
						type='text'
						value={inpt1}
						onChange={(e) => {
							setInpt1(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							setMax1(inpt1);
						}}
					>
						tes
					</button> */}
				</div>
				<div className={st.skw2}>
					<Skw header='ДНС 2' data={{ date: data.dns_2[timer] }} scwStart={scw2Start} setScwStart={setScw2Start} />
					{/* <input
						type='text'
						value={inpt2}
						onChange={(e) => {
							setInpt2(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							setMax2(inpt2);
						}}
					>
						tes
					</button> */}
				</div>
				<div className={st.skw3}>
					<Skw header='ДНС 5' data={{ date: data.dns_3[timer] }} scwStart={scw3Start} setScwStart={setScw3Start} />
					{/* <input
						type='text'
						value={inpt3}
						onChange={(e) => {
							setInpt3(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							setMax3(inpt3);
						}}
					>
						tes
					</button> */}
				</div>

				<div className={st.emk1}>
					<LevelBab title='днс1_емкость 400м3' status={level1} max={max1} />
				</div>
				<div className={st.emk2}>
					<LevelBab title='днс2_емкость  300м3' status={level2} max={max2} />
				</div>
				<div className={st.emk3}>
					<LevelBab title='днс3_емкость  400м3' status={level3} max={max3} />
				</div>
				<div className={st.pipe}>
					<Pipe title='Напорная труба' status={levelPipe} />
				</div>
			</div>
		</div>
	);
}

function Skw({ header, data, scwStart, setScwStart }) {
	let [infoAn, setinfoAn] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			setinfoAn(0);
		}, 2000);
		setinfoAn(1);
	}, [data]);

	return (
		<div className={st.skw}>
			{scwStart ? (
				<div className={st.skw_info} style={{ opacity: `${infoAn}` }}>
					+ {data.date} м3/час
				</div>
			) : null}
			<div>{header}</div>
			<div>
				<Toggle state={scwStart} onClick={setScwStart} />
			</div>
		</div>
	);
}

export default Demo;

const data = {
	dns_1: [
		39.98, 39.98, 39.98, 39.98, 39.98, 39.98, 39.98, 39.98, 39.98, 38.36, 37.48, 33.83, 34.16, 31.41, 27.14, 27, 27.14, 27.14, 27.14, 27.14, 27.14,
		27.14, 27.14, 27.14,
	],
	dns_2: [3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 4.17, 3.7, 3.86, 4.64, 4.64, 4.64, 4.64, 4.64, 4.64, 4.64, 4.64],
	dns_3: [
		21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 20.92, 20.59, 20.36, 20.36, 20.38, 20.33, 20.36, 20.36, 20.36, 20.5, 20.82, 20.82,
		20.82, 20.82,
	],
};
