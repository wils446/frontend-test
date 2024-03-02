import "./a.css";

type AProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const A: React.FC<AProps> = (props) => <a {...props} />;
