import "./nav.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear localStorage
        localStorage.clear();
        console.log("LocalStorage cleared:", localStorage);

        // Navigate to the home page
        navigate("/");
    };

    return (
        <div className="nv">
            {/* The div triggers the handleLogout function when clicked */}
            <div className="right" onClick={handleLogout} style={{ cursor: "pointer" }}>
                <div className="color" style={{ borderRadius: '90px' }}>
                    <img
                        src="/log.gif"
                        className="mb-5"
                        style={{
                            height: '60px',
                            width: '65px',
                            borderRadius: '90px',
                            marginLeft: '40px',
                        }}
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
