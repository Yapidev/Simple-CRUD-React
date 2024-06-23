// import Link from react router dom
import { Link, useLocation, useNavigate } from "react-router-dom";

// import hook react
import React, { useContext } from "react";

// import Cookies from js-cookie
import Cookies from "js-cookie";

// import context
import { AuthContext } from "../context/AuthContext";

export default function SidebarMenu() {
    // define useLocation as location
    const location = useLocation();

    // menggunakan hook useNavigate untuk navigasi
    const navigate = useNavigate();

    // destructure context setIsAuthenticated
    const { setIsAuthenticated } = useContext(AuthContext);

    // user route prefix
    const userPrefix = "/admin/users";

    // method to handle logout
    const logout = () => {
        // remove token and user on cookies
        Cookies.remove("token");
        Cookies.remove("user");

        // assign false to state setIsAuthenticated
        setIsAuthenticated(false);

        // redirect to login
        navigate("/login", { replace: true });
    };

    return (
        <div className="card border-0 rounded shadow-sm">
            <div className="card-header">Main Menu</div>
            <div className="card-body">
                <div className="list-group">
                    {/* Link to Dashboard */}
                    <Link
                        to="/admin/dashboard"
                        className={`list-group-item list-group-item-action ${
                            location.pathname === "/admin/dashboard" && "active"
                        }`}>
                        Dashboard
                    </Link>

                    {/* Link to Users */}
                    <Link
                        to="/admin/users"
                        className={`list-group-item list-group-item-action ${
                            location.pathname.startsWith(userPrefix) && "active"
                        }`}>
                        Users
                    </Link>

                    {/* Action logout */}
                    <a
                        onClick={logout}
                        className="list-group-item list-group-item-action"
                        style={{ cursor: "pointer" }}>
                        Logout
                    </a>
                </div>
            </div>
        </div>
    );
}
