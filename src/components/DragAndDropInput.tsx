import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "../styles/components/DragAndDropInput.module.scss";

const DragAndDropInput = () => {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		console.log(acceptedFiles);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/*": [".jpg", ".jpeg", ".png", ".webp"],
		},
	});

	return (
		<div {...getRootProps()} className={styles.drag}>
			<input {...getInputProps()} />

			{isDragActive ? (
				<p>Drop your file here</p>
			) : (
				<p>Drag your image files</p>
			)}
		</div>
	);
};

export default DragAndDropInput;
