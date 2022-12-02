import { RouteObject } from "react-router-dom";
import { RouterStructure } from "../@types/routes";
import NoMatch from "./NoMatch";
import ProtectedRoute from "./ProtectedRoute";

const createChildrenTree = (
	routerStructure: RouterStructure
): Array<RouteObject> => {
	const tree = Object.values(routerStructure).map((route): RouteObject => {
		return {
			path: route.path,
			element: route.isProtected ? (
				<ProtectedRoute redirecTo={route.isProtected.redirectTo}>
					{route.element as JSX.Element}
				</ProtectedRoute>
			) : (
				route.element
			),
			loader: route.loader ?? undefined,
		};
	});

	tree.push({
		path: "*",
		element: <NoMatch />,
	});

	return tree;
};

export default createChildrenTree;
