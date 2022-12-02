import { RouteObject, NonIndexRouteObject } from "react-router-dom";

export type pages = "home" | "login" | "employees" | "upload";

export type RouteDictionary<T> = {
	[route in pages]: T;
};

export type CustomRoute = {
	path: string;
	text: string;
	isProtected?: {
		redirectTo: string;
	};
};

export interface RouteElement
	extends Extract<RouteObject, NonIndexRouteObject> {}
