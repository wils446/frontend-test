import { IconsProps } from "../interfaces";

export const Plus: React.FC<IconsProps> = (props) => (
	<svg
		width={props.size}
		height={props.size}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
		<g
			id="SVGRepo_tracerCarrier"
			strokeLinecap="round"
			strokeLinejoin="round"
		></g>
		<g id="SVGRepo_iconCarrier">
			{" "}
			<path
				d="M6 12H18M12 6V18"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>{" "}
		</g>
	</svg>
);
