//import router
import AppRoutes from "./routes";

// import NavbarMenu Components
import NavbarMenu from "./components/NavbarMenu";

export default function App() {
    return (
        <div>
            {/* Navbar */}
            <NavbarMenu />

            {/* routers */}
            <div className="container mt-5">
                <AppRoutes />
            </div>
        </div>
    );
}
