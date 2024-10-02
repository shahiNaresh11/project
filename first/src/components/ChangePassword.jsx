import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';

function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const userId = localStorage.getItem("identityId");

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setError("");

        if (newPassword !== confirmPassword) {
            setError("New password and confirm password do not match.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.get(`http://localhost:1337/api/user-details/${userId}`);
            const userData = response.data.data;

            if (userData.attributes.Password !== currentPassword) {
                setError("Current password is incorrect.");
                setLoading(false);
                return;
            }

            const updateResponse = await axios.put(`http://localhost:1337/api/user-details/${userId}`, {
                data: {
                    Password: newPassword
                }
            });

            if (updateResponse.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Password changed successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");
            }
        } catch (error) {
            console.error(error);
            setError("Failed to change the password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center">
            <div className="card shadow-lg" style={{ width: '30rem' }}>
                <div className="card-body">
                    <h1 className="card-title text-center mb-4">Change Password</h1>
                    <form onSubmit={handleChangePassword}>
                        <div className="form-group mb-3">
                            <label htmlFor="currentPassword">Current Password</label>
                            <input
                                type="password"
                                id="currentPassword"
                                className="form-control"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="newPassword">New Password</label>
                            <input
                                type="password"
                                id="newPassword"
                                className="form-control"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="confirmPassword">Confirm New Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && <div className="alert alert-danger">{error}</div>}

                        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                            {loading ? "Changing..." : "Change Password"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
