import { Box, Text } from "../../../../atoms";
import "./analytics.css";

export const Analytics = () => (
	<Box>
		<Text.H5 style={{ marginBottom: "1rem" }}>Analytics</Text.H5>
		<div className="percent-label">
			<Text.H2>90%</Text.H2>
			<Text.H6 style={{ color: "#737373" }}>Done</Text.H6>
		</div>
		<div className="progress-bar">
			<div className="done-progress" />
			<div className="in-progress" />
			<div className="todo-progress" />
		</div>
		<div className="legend">
			<div className="legend-container">
				<div className="done-dot" />
				<Text.H6>Done</Text.H6>
			</div>
			<div className="legend-container">
				<div className="in-progress-dot" />
				<Text.H6>In Progress</Text.H6>
			</div>
			<div className="legend-container">
				<div className="todo-dot" />
				<Text.H6>ToDo</Text.H6>
			</div>
		</div>
	</Box>
);
