import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            // Sending a GET request to fetch user details
            const response = await axios.get("http://localhost:1337/api/user-details");
            console.log(response);
            const users = response.data.data; // Extract the array of users
            console.log(users);
            const user = users.filter((user) => email === user.attributes.email);
            console.log(user);
            if (!user) {
                setError("User with given email doest not exist");
                return;
            }
            if (user[0].attributes.Password === password) {
                // If user is found, store the user ID and navigate to the dashboard
                localStorage.setItem("identityId", user[0].id);
                localStorage.setItem("name", user[0].attributes.Name); // Corrected this line

                navigate("/dashboard");
            } else {
                // If no matching user is found, set error message
                setError("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error(error); // Log the error for debugging
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main">
            <div className="myForm d-flex flex-column justify-content-center align-items-center">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="w-100 text-center">
                    <div className="form-group mb-3 shadow p-2 bg-white rounded w-75 ms-5">
                        <input
                            type="email"
                            id="email"
                            className="form-control form-control-md rounded"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group mb-3 shadow p-2 bg-white rounded w-75 ms-5">
                        <input
                            type="password"
                            id="password"
                            className="form-control form-control-md rounded"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <div className="alert alert-danger w-75">{error}</div>}

                    <button type="submit" className="btn btn-primary btn-md rounded mt-3" disabled={loading}>
                        {loading ? "Loading..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
