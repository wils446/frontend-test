import { lastTransactions } from "../../../../../assets";
import { avatar } from "../../../../../assets/imgs";
import { A, Box, Text } from "../../../../atoms";
import "./last-transactions.css";

type LastTransactionProps = (typeof lastTransactions)[number] & {
	index: number;
};

const LastTransaction: React.FC<LastTransactionProps> = (props) => (
	<div
		className={`transaction-list-container ${
			props.index !== lastTransactions.length - 1 && "border-bottom"
		}`}
	>
		<img className="avatar" src={avatar} alt="image" />
		<div className="transaction-list-label">
			<div>
				<Text.H6>{props.name}</Text.H6>
				<Text.H6 style={{ color: "#737373" }}>
					{props.date.toLocaleDateString()}
				</Text.H6>
			</div>
			<Text.H6>{props.currency}</Text.H6>
		</div>
	</div>
);

export const LastTransactions: React.FC = () => (
	<Box>
		<div className="last-transactions-label">
			<Text.H5>Last Transactions</Text.H5>
			<div>
				<A style={{ marginRight: "0.4rem" }}>Newest</A>
				<A>Oldest</A>
			</div>
		</div>
		<div className="transaction-list-wrap">
			{lastTransactions.map((transaction, index) => (
				<LastTransaction key={index} {...transaction} index={index} />
			))}
		</div>
	</Box>
);
