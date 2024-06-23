// import SidebarMenu
import SidebarMenu from '../../../components/SidebarMenu';

// import useState and useEffect
import { useState, useEffect } from 'react';

// import js cookie
import Cookies from 'js-cookie';

export default function Dashboard() {
    // init state user
    const [user, setUser] = useState([]);

    // useEffect
    useEffect(() => {
        // Get user data from cookies
        const userData = Cookies.get('user');

        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-xl-3 col-md-12 mb-3">
                    <SidebarMenu />
                </div>
                <div className="col-xl-9 col-md-12 mb-3">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-header">Dashboard</div>
                        <div className="card-body">
                            Selamat Datang, <strong>{user?.name}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
