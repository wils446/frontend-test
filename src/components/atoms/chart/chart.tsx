import {
	ArcElement,
	BarController,
	BarElement,
	CategoryScale,
	ChartDataset,
	Chart as ChartJS,
	LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

type ChartProps = {
	labels: string[];
	data: ChartDataset<"bar", number[]>[];
};

export const Chart: React.FC<ChartProps> = (props) => {
	ChartJS.register(
		ArcElement,
		CategoryScale,
		LinearScale,
		BarController,
		BarElement
	);

	const options = {
		plugins: {
			legend: { display: false },
		},
		scales: {
			x: {
				grid: {
					color: "white",
				},
			},
			y: {
				grid: {
					color: "white",
				},
			},
		},
	};

	return (
		<Bar
			data={{
				datasets: props.data,
				labels: props.labels,
			}}
			options={options}
		/>
	);
};
