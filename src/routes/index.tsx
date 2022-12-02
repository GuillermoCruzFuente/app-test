import { createHashRouter } from "react-router-dom";
import Root from "../Root";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Upload from "./pages/Upload";
import AuthLogin from "../components/AuthLogin";
import createChildrenTree from "../components/CreateChildrenTree";
import type {
	CustomRoute,
	RouteDictionary,
	RouteElement,
	RouterStructure,
} from "../@types/routes";
import { employeesLoader } from "../loaders/EmployeesLoader";

export const AppRoutes: RouteDictionary<CustomRoute> = {
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
		isProtected: {
			redirectTo: "/",
		},
	},
	upload: {
		path: "/upload",
		text: "Upload",
		isProtected: {
			redirectTo: "/",
		},
	},
};

const AppRouteElements: RouteDictionary<RouteElement> = {
	home: { element: <Home /> },
	login: { element: <AuthLogin /> },
	employees: {
		element: <Employees />,
		loader: employeesLoader,
	},
	upload: {
		element: <Upload />,
	},
};

export const RoutesWithElements: RouterStructure = {
	home: {
		...AppRoutes.home,
		...AppRouteElements.home,
	},
	login: {
		...AppRoutes.login,
		...AppRouteElements.login,
	},
	employees: {
		...AppRoutes.employees,
		...AppRouteElements.employees,
	},
	upload: {
		...AppRoutes.upload,
		...AppRouteElements.upload,
	},
};

const router = createHashRouter([
	{
		path: "/",
		element: <Root />,
		children: createChildrenTree(RoutesWithElements),
	},
]);

export default router;
