import { useState } from "react";
import { chatMessages } from "../../../../../assets";
import { avatar } from "../../../../../assets/imgs";
import { Box, Button, Text } from "../../../../atoms";
import "./chat.css";

type ChatMessageProps = {
	message: string;
	isOwn?: boolean;
};

export const ChatMessage: React.FC<ChatMessageProps> = (props) => (
	<div className={`chat-container ${props.isOwn && "reverse-avatar"}`}>
		<img src={avatar} alt="image" className="avatar" />
		<div className={props.isOwn ? "own-message-balon" : "message-balon"}>
			<Text.H6>{props.message}</Text.H6>
		</div>
	</div>
);

export const Chat = () => {
	const [messages, setMessages] = useState(chatMessages);
	const [inputValue, setInputValue] = useState("");

	const sendMessage = (message: string) => {
		setMessages((prev) => [...prev, { isMe: true, message }]);
		setInputValue("");
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") sendMessage(inputValue);
	};

	return (
		<Box
			style={{
				borderTopLeftRadius: 0,
				borderBottomLeftRadius: 0,
				borderTop: 0,
				borderBottom: 0,
				borderRight: 0,
				borderLeftWidth: "1px",
				borderStyle: "solid",
				borderColor: "#dbeafe",
				height: "14rem",
			}}
		>
			<div className="chat-container-wrap">
				<Text.H5>Estherd Howard</Text.H5>
				<div className="chat-box">
					{messages.map((message, i) => (
						<ChatMessage
							key={i}
							message={message.message}
							isOwn={message.isMe}
						/>
					))}
				</div>
				<div className="input-box">
					<input
						placeholder="type your message"
						type="text"
						name=""
						id=""
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={handleKeyPress}
					/>
					<Button
						color="blue"
						style={{ width: "25%" }}
						onClick={() => sendMessage(inputValue)}
					>
						Send Now
					</Button>
				</div>
			</div>
		</Box>
	);
};
