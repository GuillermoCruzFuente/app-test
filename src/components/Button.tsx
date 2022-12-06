import { ButtonHTMLAttributes, forwardRef, Ref } from "react";
import styles from "../styles/components/Button.module.scss";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
	fullWidth?: true;
	reducedPadding?: true;
}

const Button = forwardRef((props: Button, ref: Ref<HTMLButtonElement>) => {
	const { fullWidth, reducedPadding, className, children, ...restProps } =
		props;

	const getClassNames = () => {
		const getClassName = () => {
			return `${className ? `${className} ` : ""}`;
		};

		const getFullWidthClassName = () => {
			return `${fullWidth ? ` ${styles.fullWidth}` : ""}`;
		};

		const getReducedPaddingClassName = () => {
			return reducedPadding
				? ` ${styles.reducedPadding}`
				: ` ${styles.normalPadding}`;
		};

		return `${styles.button}${
			getClassName() +
			getFullWidthClassName() +
			getReducedPaddingClassName()
		}`;
	};

	return (
		<button ref={ref} className={getClassNames()} {...restProps}>
			{children}
		</button>
	);
});

export default Button;
