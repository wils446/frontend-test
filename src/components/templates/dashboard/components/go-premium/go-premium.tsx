import { Box, Button, Text } from "../../../../atoms";
import "./go-premium.css";

export const GoPremium = () => (
	<Box bordered>
		<Text.H6 style={{ textAlign: "center" }}>Go to Premium</Text.H6>
		<div className="go-premium-label">
			<Text.H5 style={{ fontWeight: 700 }}>Need more features?</Text.H5>
			<Text.H6 style={{ color: "#737373" }}>
				Update your account to premium to get more features.
			</Text.H6>
		</div>
		<Button
			color="blue"
			style={{
				width: "100%",
				height: "3rem",
			}}
		>
			Get now
		</Button>
	</Box>
);
