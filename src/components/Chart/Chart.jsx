import st from './Chart.module.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import data from './mock';
export const Chart = () => {
	console.log(data);
	return (
		<div className={st.chart}>
			<div className={st.header}>Суточный график</div>
			<div className={st.container}>
				<ResponsiveContainer width='100%' height='100%'>
					<AreaChart
						width={500}
						height={400}
						data={data}
						margin={{
							top: 10,
							right: 30,
							left: 0,
							bottom: 0,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Area type='monotone' dataKey='uv' stroke='#4fd1c5' fill='#4fd1c5' />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};
