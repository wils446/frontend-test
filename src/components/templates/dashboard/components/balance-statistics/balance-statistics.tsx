import { Box, Text } from "../../../../atoms";
import { Chart } from "../../../../atoms/chart";
import "./balance-statistics.css";

export const BalanceStatistics = () => (
	<Box>
		<Text.H5 style={{ marginBottom: "1rem" }}>Analytics</Text.H5>
		<div className="balance-statistics-container">
			<div className="balance-statistics-label">
				<Text.H3>$564</Text.H3>
				<Text.H6 style={{ color: "#737373" }}>Your total balance</Text.H6>
			</div>
			<div className="statistics-chart">
				<Chart
					data={[
						{
							label: "",
							data: [60, 30, 30, 25, 20],
							backgroundColor: "#3b82f6",
						},
						{
							label: "",
							data: [50, 25, 20, 15, 10],
							backgroundColor: "#93c5fd",
						},
					]}
					labels={["Oct", "Nov", "Dec", "Jan", "Feb"]}
				/>
			</div>
		</div>
	</Box>
);
