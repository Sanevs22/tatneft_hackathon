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

	let [v1, setV1] = useState(0);
	let [v2, setV2] = useState(0);
	let [v3, setV3] = useState(0);

	let level1 = (v1 / 400) * 100;
	let level2 = (v2 / 300) * 100;
	let level3 = (v3 / 400) * 100;

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
		}, 1000);
	}, [timer]);

	if (level1 > 70) {
		let value = v1 - 10 * 4;
		setV1(10 * 4);
	}

	if (level2 > 70) {
		let value = v2 - 10 * 3;
		setV2(10 * 3);
	}

	if (level3 > 70) {
		let value = v3 - 10 * 4;
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
			<div className={st.timer}>
				август 2023 <br /> время: {timer} часов
			</div>
			<div className={st.demo_contaner}>
				<div className={st.skw1}>
					<Skw header='ДНС 1' data={{ date: data.dns_1[timer] }} scwStart={scw1Start} setScwStart={setScw1Start} />
				</div>
				<div className={st.skw2}>
					<Skw header='ДНС 2' data={{ date: data.dns_2[timer] }} scwStart={scw2Start} setScwStart={setScw2Start} />
				</div>
				<div className={st.skw3}>
					<Skw header='ДНС 3' data={{ date: data.dns_3[timer] }} scwStart={scw3Start} setScwStart={setScw3Start} />
				</div>

				<div className={st.emk1}>
					<LevelBab title='днс1_емкость 400м3' status={level1} />
				</div>
				<div className={st.emk2}>
					<LevelBab title='днс2_емкость  300м3' status={level2} />
				</div>
				<div className={st.emk3}>
					<LevelBab title='днс3_емкость  400м3' status={level3} />
				</div>
				<div className={st.pipe}>
					<Pipe title='Напорная труба' status={level3} />
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
	dns_2: [
		39.98, 39.98, 39.98, 39.98, 39.98, 39.98, 39.98, 39.98, 39.98, 38.36, 37.48, 33.83, 34.16, 31.41, 27.14, 27, 27.14, 27.14, 27.14, 27.14, 27.14,
		27.14, 27.14, 27.14,
	],
	dns_3: [
		39.98, 39.98, 39.98, 39.98, 39.98, 39.98, 39.98, 39.98, 39.98, 38.36, 37.48, 33.83, 34.16, 31.41, 27.14, 27, 27.14, 27.14, 27.14, 27.14, 27.14,
		27.14, 27.14, 27.14,
	],
};
