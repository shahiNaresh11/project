import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

function Layout({ children }) {
    return (
        <div className="lay d-flex">
            <Sidebar />
            <div className="one d-flex flex-column w-100">
                <Navbar />
                {children}
            </div>
        </div>
    );
}
export default Layout;
