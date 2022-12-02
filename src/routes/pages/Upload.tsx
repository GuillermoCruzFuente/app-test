import DragAndDropInput from "../../components/DragAndDropInput";
import styles from "../../styles/pages/Upload.module.scss";

const Upload = () => {
	return (
		<section>
			<h1 className={styles.title}>Drag & drop your image files in the box below</h1>
			<DragAndDropInput />
		</section>
	);
};

export default Upload;
