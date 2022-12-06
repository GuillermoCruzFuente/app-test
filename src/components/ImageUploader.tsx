import { useMemo } from "react";
import styles from "../styles/components/ImageUploader.module.scss";
import Button from "./Button";

const ImageUploader = ({
	files,
	runAfterUpload,
}: {
	files: File[];
	runAfterUpload: () => void;
}) => {
	//while mounted, files won't change
	const urls = useMemo(
		() => files.map((file) => URL.createObjectURL(file)),
		[]
	);

	const handleUpload = async () => {
		runAfterUpload();
	};

	return (
		<>
			<p className={styles.description}>
				you dropped {urls.length} {urls.length === 1 ? "file" : "files"}
			</p>

			<Button fullWidth onClick={handleUpload}>
				upload
			</Button>

			<div className={styles.imgContainer}>
				{urls.map((imgURL) => {
					return <img key={imgURL} src={imgURL} alt='' />;
				})}
			</div>
		</>
	);
};

export default ImageUploader;
