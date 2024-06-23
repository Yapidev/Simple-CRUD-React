// import Link from react router dom
import { Link } from "react-router-dom";

export default function NavbarMenu() {
    return (
        <nav
            className="navbar navbar-expand-lg bg-dark navbar-dark"
            data-bs-theme="dark">
            <div className="container">
                <Link
                    to="/"
                    className="navbar-brand">
                    HOME
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                href="https://github.com/Yapidev"
                                target="_blank"
                                className="nav-link active"
                                aria-current="page">
                                My Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
