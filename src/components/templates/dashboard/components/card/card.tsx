import { Box, Text } from "../../../../atoms";
import "./card.css";

export const Card = () => (
	<Box
		style={{
			// backgroundColor: "#1d4ed8",
			color: "#fafafa",
			background: "linear-gradient(to left, #283593, #1976d2)",
		}}
	>
		<div className="card-header">
			<Text.H3 style={{ marginBottom: "1rem" }}>S.</Text.H3>
			<Text.H3 style={{ marginBottom: "1rem" }}>Visa</Text.H3>
		</div>
		<div className="card-container">
			<div>
				<Text.H5>**** 9838</Text.H5>
				<Text.H5>Jhon Demon</Text.H5>
			</div>
			<Text.H5>08/12</Text.H5>
		</div>
	</Box>
);
