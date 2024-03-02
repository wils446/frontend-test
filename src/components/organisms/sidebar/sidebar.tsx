import { Button, Icon, Text } from "../../atoms";
import { ButtonDetail, SidebarButtons } from "../../molecules";
import "./sidebar.css";

export const Sidebar: React.FC = () => {
	const sidebarButtons: ButtonDetail[] = [
		{
			icon: "Warehouse",
			onHandleClick: () => console.log(1),
		},
		{
			icon: "Bell",
			onHandleClick: () => console.log(1),
		},
		{
			icon: "Clock",
			onHandleClick: () => console.log(1),
		},
		{
			icon: "People",
			onHandleClick: () => console.log(1),
		},
		{
			icon: "Wallet",
			onHandleClick: () => console.log(1),
		},
		{
			icon: "Gear",
			onHandleClick: () => console.log(1),
		},
	];

	return (
		<div className="sidebar">
			<div className="sidebar-label">
				<Text.H2>S.</Text.H2>
				<div className="message-section">
					<Button color="yellow" size={42} rounded>
						<Icon icon="Message" size={28} />
					</Button>
				</div>
			</div>
			<SidebarButtons buttons={sidebarButtons} />
			<div className="button-wrapper">
				<Button color="lightBlue" rounded size={42}>
					<Icon icon="User" size={28} />
				</Button>
				<Button color="lightBlue" rounded size={42}>
					<Icon icon="Leave" size={28} />
				</Button>
			</div>
		</div>
	);
};
