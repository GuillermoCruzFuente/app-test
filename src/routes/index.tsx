import { createHashRouter } from "react-router-dom";

import Root from "../Root";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Employees from "./pages/Employees";
import Upload from "./pages/Upload";

type CustomRoute = {
	path: string;
	text: string;
	protected?: true;
};

type RouteDictionary = {
	[route: string]: CustomRoute;
};

export const AppRoutes: RouteDictionary = {
	home: {
		path: "/",
		text: "Home",
	},
	login: {
		path: "/login",
		text: "Login",
	},
	employees: {
		path: "/employees",
		text: "Employees",
		protected: true,
	},
	upload: {
		path: "/upload",
		text: "Upload",
		protected: true,
	},
};

const router = createHashRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: AppRoutes.home.path,
				element: <Home />,
			},
			{
				path: AppRoutes.login.path,
				element: <Login />,
			},
			{
				path: AppRoutes.employees.path,
				element: <Employees />,
			},
			{
				path: AppRoutes.upload.path,
				element: <Upload />,
			},
		],
	},
]);

export default router;
