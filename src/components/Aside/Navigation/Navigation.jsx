import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/important">Important</NavLink>
            <NavLink to="/deleted">Deleted</NavLink>
            <NavLink to="/tasks">Tasks</NavLink>
        </nav>
    )
}

export default Navigation;