import { ClipboardEvent, InputHTMLAttributes, forwardRef, Ref } from "react";

interface SafeInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SafeInput = forwardRef(
	(props: SafeInputProps, ref: Ref<HTMLInputElement>) => {
		const handleClipBoardEvent = (
			event: ClipboardEvent<HTMLInputElement>
		) => event.preventDefault();

		return (
			<input
				onCopy={handleClipBoardEvent}
				onPaste={handleClipBoardEvent}
				ref={ref}
				{...props}
			/>
		);
	}
);

export default SafeInput;
