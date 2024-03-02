import "./text.css";

type BaseHeadlineProps = React.HTMLAttributes<HTMLHeadingElement>;

export const H1: React.FC<BaseHeadlineProps> = (props) => (
	<h1 className="headline1" {...props} />
);
export const H2: React.FC<BaseHeadlineProps> = (props) => (
	<h2 className="headline2" {...props} />
);
export const H3: React.FC<BaseHeadlineProps> = (props) => (
	<h3 className="headline3" {...props} />
);
export const H4: React.FC<BaseHeadlineProps> = (props) => (
	<h4 className="headline4" {...props} />
);
export const H5: React.FC<BaseHeadlineProps> = (props) => (
	<h5 className="headline5" {...props} />
);
export const H6: React.FC<BaseHeadlineProps> = (props) => (
	<h6 className="headline6" {...props} />
);
