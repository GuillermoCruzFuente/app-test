import { AnyAction, Dispatch } from "@reduxjs/toolkit";

export type NotAuthProps = {
	linkCallback: () => void;
};

export type AuthProps = NotAuthProps & {
	dispatch: Dispatch<AnyAction>;
};
