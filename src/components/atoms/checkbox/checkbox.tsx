import { useId } from "react";
import "./checkbox.css";

type CheckboxProps = {
	label: string;
	checked?: boolean;
	onClick?: () => void;
};

export const Checkbox: React.FC<CheckboxProps> = (props) => {
	const id = useId();

	return (
		<div className="checkbox-container" onClick={props.onClick}>
			<input
				type="checkbox"
				id={`${id}${props.label}`}
				name={`${id}${props.label}`}
				value="Bike"
				checked={props.checked}
			/>
			<label htmlFor={`${id}${props.label}`}>{props.label}</label>
		</div>
	);
};
