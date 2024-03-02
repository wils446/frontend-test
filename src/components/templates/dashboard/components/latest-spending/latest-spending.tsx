import { latestSpending } from "../../../../../assets";
import * as images from "../../../../../assets/imgs";
import { A, Box, Text } from "../../../../atoms";
import "./latest-spending.css";

type Images = keyof typeof images;

type SpendingListProps = {
	image: Images;
	name: string;
	date: string;
	index: number;
};

const SpendingList: React.FC<SpendingListProps> = (props) => (
	<div
		className={`spending-list ${
			props.index !== latestSpending.length - 1 && "border-bottom"
		}`}
	>
		<img className="spending-image" alt="image" src={images[props.image]} />
		<div className={`spending-list-label `}>
			<Text.H6>{props.name}</Text.H6>
			<Text.H6 style={{ color: "#737373" }}>{props.date}</Text.H6>
		</div>
	</div>
);

export const LatestSpending = () => (
	<Box bordered>
		<Text.H5>Latest Spending</Text.H5>
		<div className="spending-list-wrap">
			{latestSpending.map((data, i) => (
				<SpendingList
					key={i}
					date={data.date}
					name={data.name}
					image={data.image as Images}
					index={i}
				/>
			))}
		</div>
		<div style={{ textAlign: "center" }}>
			<A>View All</A>
		</div>
	</Box>
);
