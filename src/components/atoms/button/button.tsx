import { useState } from "react";
import "./button.css";

type ButtonColors = "blue" | "yellow" | "lightBlue" | "white";

const buttonColors: Record<ButtonColors, string[]> = {
	blue: ["#2563eb", "#1e40af"],
	yellow: ["#fbbf24", "#f59e0b"],
	lightBlue: ["#eff6ff", "#dbeafe", "#3b82f6"],
	white: ["#ffffff", "#f5f5f5"],
};

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	rounded?: boolean;
	color: ButtonColors;
	size?: number;
	disable?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
	rounded,
	color,
	size,
	disable,
	...props
}) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => setIsHover(true);
	const handleMouseLeave = () => setIsHover(false);

	return (
		<button
			{...props}
			style={{
				backgroundColor: disable
					? buttonColors[color][2]
					: isHover
					? buttonColors[color][1]
					: buttonColors[color][0],
				borderRadius: rounded ? "50%" : "0.5rem",
				padding: rounded ? "0" : "5px 10px",
				height: size ? size : "auto",
				width: size ? size : "auto",
				...props.style,
			}}
			className="button"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		/>
	);
};
