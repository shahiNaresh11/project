import { Link } from "react-router-dom";
import './sidebar.css';
import { HiChartPie } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdFamilyRestroom } from "react-icons/md";

function Sidebar() {
    const userId = localStorage.getItem("identityId");
    return (
        <div className="full">
            <div
                className="outer d-flex flex-column h-100"
                style={{
                    width: '250px',
                    height: '100vh',
                    backgroundColor: '#212529',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                }}
            >
                {/* Logo section with 75% white line and shadow */}
                <div
                    className="log d-flex justify-content-center align-items-center bg-inform"
                    style={{
                        height: '140px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Shadow effect
                        position: 'relative',
                    }}
                >
                    <img
                        src="/logo.webp"
                        alt="logo"
                        style={{
                            height: '80px',
                            width: '80px',
                            borderRadius: '70px',
                            margin: '10px',
                        }}
                    />
                    {/* White line with 75% width */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '90%',   // 75% width for the white line
                            borderBottom: '2px solid white',  // White line
                            margin: '0 auto',  // Centering the border
                        }}
                    ></div>
                </div>

                {/* Sidebar links */}
                <div className="bar d-flex flex-column ps-5" style={{ gap: '34px', paddingTop: '20px' }}>
                    <Link to="/dashboard" className="text-decoration-none fs-6 fw-bold" style={{ color: 'white' }}>
                        <HiChartPie size="30px" style={{ marginRight: '8px' }} /> Dashboard
                    </Link>
                    <Link to="/profile" className="text-decoration-none fs-6 fw-bold" style={{ color: 'white' }}>
                        <CgProfile size="30px" style={{ marginRight: '8px' }} /> My Profile
                    </Link>
                    <Link to={`/change/${userId}`} className="text-decoration-none fs-6 fw-bold" style={{ color: 'white' }}>
                        <RiLockPasswordFill size="30px" style={{ marginRight: '8px' }} /> Change Password
                    </Link>
                    <Link to="/family" className="text-decoration-none fs-6 fw-bold" style={{ color: 'white' }}>
                        <MdFamilyRestroom size="30px" style={{ marginRight: '8px' }} /> My Family
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
