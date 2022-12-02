import { Employee } from "./Employee";

export type InputEmployee = Omit<Employee, "id">;
