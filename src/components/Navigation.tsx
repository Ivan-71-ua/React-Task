import { memo } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

    console.log("RENDER Navigation");
    return (
        <nav className="nav">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Головна
            </NavLink>

            <NavLink
                to="/items"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
                Список
            </NavLink>

            <NavLink
                to="/class/items"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
                Class список
            </NavLink>

            <NavLink
                to="/add"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
                Додати
            </NavLink>

            <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
                Про додаток
            </NavLink>
        </nav>
    );
};

export default memo(Navigation);