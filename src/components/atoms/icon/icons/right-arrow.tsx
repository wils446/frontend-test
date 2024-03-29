import { IconsProps } from "../interfaces";

export const RightArrow: React.FC<IconsProps> = (props) => (
	<svg
		height={props.size}
		width={props.size}
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
				d="M10 7L15 12L10 17"
				stroke="#000000"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>{" "}
		</g>
	</svg>
);
