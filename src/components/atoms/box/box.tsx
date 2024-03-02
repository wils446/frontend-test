import "./box.css";

type BoxProps = {
	bordered?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Box: React.FC<BoxProps> = ({ bordered, ...props }) => (
	<div
		className="box"
		{...props}
		style={{
			borderWidth: bordered ? "2px" : 0,
			...props.style,
		}}
	></div>
);
