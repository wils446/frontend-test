import { expensesAndIncome } from "../../../../../assets";
import { Box, Text } from "../../../../atoms";
import "./expenses-and-income.css";

export const ExpensesAndIncome = () => (
	<Box bordered>
		<Text.H5>Expenses and Income</Text.H5>
		<div className="expense-income-wrap">
			<div className="expense-income-label">
				<Text.H6>Expenses</Text.H6>
				<Text.H5>{expensesAndIncome.expense.percent}%</Text.H5>
				<Text.H6 style={{ color: "#737373" }}>
					{expensesAndIncome.expense.count}
				</Text.H6>
			</div>
			<div className="expense-income-label income-label">
				<Text.H6>Expenses</Text.H6>
				<Text.H5>{expensesAndIncome.income.percent}%</Text.H5>
				<Text.H6 style={{ color: "#737373" }}>
					{expensesAndIncome.income.count}
				</Text.H6>
			</div>
		</div>
		<div className="expense-income-bar-wrapper">
			<div
				style={{
					backgroundColor: "#3b82f6",
					width: "75%",
				}}
			/>
			<div
				style={{
					backgroundColor: "#f59e0b",
					width: "40%",
				}}
			/>
		</div>
	</Box>
);
