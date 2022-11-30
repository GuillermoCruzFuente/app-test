import { NavLinkProps } from "react-router-dom";

const ClassNameProperty = "className";

/**
 * Union type defined by react-router-dom.
 * It contains different types in order to set a className for NavLink
 */
type ClassNameUnion = NavLinkProps[typeof ClassNameProperty];

/**
 * Function executed on every navigation.
 * Allows us to define a custom classname for Links that match the current route
 */
export type NavLinkActiveHandler = Extract<ClassNameUnion, Function>;
