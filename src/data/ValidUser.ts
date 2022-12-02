import type { User } from "../features/login/loginSlice";
import Timer from "../utils/Timer";

const TheUser: User = {
	name: "Guillermo",
	password: "Factumex",
};

export const isValidUser = async (providedUser: User) => {
	//simulate latency
	await Timer(500);

	return JSON.stringify(providedUser) === JSON.stringify(TheUser);
};

export default TheUser;
