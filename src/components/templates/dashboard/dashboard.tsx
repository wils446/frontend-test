import { Button, Icon, Text } from "../../atoms";
import { Sidebar } from "../../organisms";
import {
	Analytics,
	BalanceStatistics,
	Card,
	Chat,
	ExpensesAndIncome,
	GoPremium,
	LastTransactions,
	LatestSpending,
	ListItemToBuy,
} from "./components";
import "./dashboard.css";

export const Dashboard: React.FC = () => {
	return (
		<div className="dashboard">
			<Sidebar />
			<div className="summary">
				<div className="summary-header">
					<div>
						<Text.H2>Hello, Jhon .D</Text.H2>
						<Text.H5 style={{ fontWeight: 400 }}>
							View and control your finance here!
						</Text.H5>
					</div>
					<Button color="white" rounded size={42}>
						<Icon icon="Lens" size={20} />
					</Button>
				</div>
				<div className="summary-body">
					<div className="padding-right">
						<BalanceStatistics />
					</div>
					<div className="padding-left">
						<Card />
					</div>
					<div>
						<ListItemToBuy />
					</div>
					<div>
						<Chat />
					</div>
					<div className="padding-right">
						<LastTransactions />
					</div>
					<div className="padding-left">
						<Analytics />
					</div>
				</div>
			</div>
			<div className="data">
				<div className="margin-bottom">
					<ExpensesAndIncome />
				</div>
				<div className="margin-bottom">
					<LatestSpending />
				</div>
				<div className="margin-bottom">
					<GoPremium />
				</div>
			</div>
		</div>
	);
};
