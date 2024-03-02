import { useState } from "react";
import { Button, Icon, Icons } from "../../atoms";
import "./sidebar-button.css";

export type ButtonDetail = {
	icon: Icons;
	onHandleClick: () => void;
};

type SidebarButtonsProps = {
	buttons: ButtonDetail[];
};

export const SidebarButtons: React.FC<SidebarButtonsProps> = (props) => {
	const backgroundClassName = (i: number) =>
		i === 0
			? "first-button-background"
			: i === props.buttons.length - 1
			? "last-button-background"
			: "button-background";

	const [activeButton, setActiveButton] = useState(props.buttons[0].icon);

	const handleButtonClick = (buttonName: Icons, cb: () => void) => {
		setActiveButton(buttonName);
		cb();
	};

	return (
		<div className="sidebar-button">
			{props.buttons.map((button, i) => (
				<div key={i} className={backgroundClassName(i)}>
					<Button
						key={i}
						color="lightBlue"
						size={42}
						rounded
						onClick={() => handleButtonClick(button.icon, button.onHandleClick)}
						disable={activeButton === button.icon}
					>
						<Icon icon={button.icon} size={24} />
					</Button>
				</div>
			))}
		</div>
	);
};
