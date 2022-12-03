import { useMemo } from "react";
import useUserAuth from "../hooks/useUserAuth";
import type { NotAuthProps } from "../@types/NavLinksCreation";
import createLinksForAuthUser from "./CreateLinksForAuthUser";
import createLinksForNotAuthUser from "./CreateLinksForNotAuthUser";
import { useDispatch } from "react-redux";

const createNavMenuItems = ({ linkCallback }: NotAuthProps) => {
	const { isUserAuthenticated } = useUserAuth();
	const dispatch = useDispatch();

	const getNavLinks = () =>
		isUserAuthenticated
			? createLinksForAuthUser({ linkCallback, dispatch })
			: createLinksForNotAuthUser({ linkCallback });

	return useMemo(() => getNavLinks(), [isUserAuthenticated]);
};

export default createNavMenuItems;
