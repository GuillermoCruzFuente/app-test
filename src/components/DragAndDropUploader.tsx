import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import styles from "../styles/components/DragAndDropInput.module.scss";
import ImageUploader from "./ImageUploader";

const DragAndDropUploader = () => {
	const [filesWereDroppedAndAccepted, setFilesWereDroppedAndAccepted] =
		useState(false);

	const [imgFiles, setImgFiles] = useState<File[]>([]);

	const alertFileRejections = (fileRejections: FileRejection[]) => {
		if (fileRejections.length > 0) {
			let errorMessages = fileRejections.map(
				(fileRejection: FileRejection) => {
					return `${
						fileRejection.file.name
					} - ${fileRejection.errors.map((error) => error.message)}`;
				}
			);

			alert(`File rejection - ${errorMessages}`);
		}
	};

	const onDrop = useCallback(
		(acceptedFiles: File[], fileRejections: FileRejection[]) => {
			if (acceptedFiles.length > 0) {
				setImgFiles(acceptedFiles);
				setFilesWereDroppedAndAccepted(true);
			}

			alertFileRejections(fileRejections);
		},
		[]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/*": [".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"],
		},
	});

	const afterUpload = () => {
		setFilesWereDroppedAndAccepted(false);
	};

	return filesWereDroppedAndAccepted ? (
		<ImageUploader files={imgFiles} runAfterUpload={afterUpload} />
	) : (
		<div {...getRootProps()} className={styles.drag}>
			<input {...getInputProps()} />

			{isDragActive ? (
				<p>Drop your files here</p>
			) : (
				<p>Drag your image files here</p>
			)}
		</div>
	);
};

export default DragAndDropUploader;
