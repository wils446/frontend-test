import * as icons from "./icons";

export type Icons = keyof typeof icons;

type IconProps = {
	icon: Icons;
	size: number;
};

export const Icon: React.FC<IconProps> = (props) => {
	const TargedIcon = icons[props.icon];

	return <TargedIcon size={props.size} />;
};
