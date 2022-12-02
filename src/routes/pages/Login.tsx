import LoginForm from "../../components/LoginForm";
import formStyles from "../../styles/components/LoginForm.module.scss";
import pageStyles from "../../styles/pages/Login.module.scss";

const Login = () => {
	return (
		<section className={pageStyles.section}>
			<LoginForm className={formStyles.loginForm} />
		</section>
	);
};

export default Login;
