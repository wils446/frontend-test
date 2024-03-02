import { useState } from "react";
import { listItemToBuy } from "../../../../../assets";
import { Box, Checkbox, Icon, Text } from "../../../../atoms";
import "./list-item-to-buy.css";

export const ListItemToBuy = () => {
	const [items, setItems] = useState(listItemToBuy.items);

	const onHandleClick = (item: (typeof items)[number]) => {
		setItems((prev) =>
			prev.map((prevItem) => {
				if (prevItem.name === item.name) return item;
				return prevItem;
			})
		);
	};

	return (
		<Box
			style={{
				borderTopRightRadius: 0,
				borderBottomRightRadius: 0,
				borderTop: 0,
				borderBottom: 0,
				borderLeft: 0,
				borderRightWidth: "1px",
				borderStyle: "solid",
				borderColor: "#dbeafe",
				height: "14rem",
			}}
		>
			<Text.H5>List Item to Buy</Text.H5>
			<div className="date-wrapper">
				<div className="time-label">
					<Text.H5>{listItemToBuy.startDate.time}</Text.H5>
					<Text.H6 style={{ color: "#737373" }}>
						{listItemToBuy.startDate.date}
					</Text.H6>
				</div>
				<Icon icon="RightArrow" size={32} />
				<div className="time-label">
					<Text.H5>{listItemToBuy.endDate.time}</Text.H5>
					<Text.H6 style={{ color: "#737373" }}>
						{listItemToBuy.endDate.date}
					</Text.H6>
				</div>
			</div>
			<div className="list-detail">
				<div className="list-detail-label">
					<Text.H6 style={{ color: "#737373" }}>0/3 </Text.H6>
					<Text.H6>Shopping list</Text.H6>
				</div>
				<button className="add-item-button">
					<Icon icon="Plus" size={18} />
					Add an Item
				</button>
			</div>
			<div className="item-list">
				{items.map((item, index) => (
					<Checkbox
						key={index}
						label={item.name}
						checked={item.checked}
						onClick={() => onHandleClick({ ...item, checked: !item.checked })}
					/>
				))}
			</div>
		</Box>
	);
};
