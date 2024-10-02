import { useEffect, useState } from "react";
import { getData } from "../page/api/AxiousRequest";

function Myprofile() {
    const [details, setDetails] = useState();
    const userId = localStorage.getItem("identityId");

    const getDetails = async () => {
        const data = await getData(`user-details/${userId}`);
        console.log(data);
        setDetails(data.attributes);
    };

    useEffect(() => {
        getDetails();
    }, []);

    console.log(details);

    return (
        <div className="container mt-5">
            <div className="card mb-3 shadow-lg rounded w-50 mx-auto" style={{ backgroundColor: '#f8f9fa', border: 'none' }}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img
                            src="/my.jpg"
                            className="img-fluid rounded-circle shadow"
                            style={{ width: '100%', height: 'auto', maxWidth: '230px', objectFit: 'cover', border: '5px solid #fff' }}
                            alt="Profile"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-4">
                            <h3 className="card-title mb-4" style={{ fontWeight: 'bold', color: '#343a40' }}>
                                Profile Information
                            </h3>

                            <div className="mt-3" style={{ lineHeight: '2' }}>
                                <h5 className="fw-bold" style={{ color: '#007bff' }}>
                                    Name:&nbsp;&nbsp;
                                    <span style={{ fontWeight: 'normal', color: '#495057' }}>{details?.Name}</span>
                                </h5>

                                <h5 className="fw-bold" style={{ color: '#007bff' }}>
                                    Email:&nbsp;&nbsp;
                                    <span style={{ fontWeight: 'normal', color: '#495057' }}>{details?.email}</span>
                                </h5>
                                <h5 className="fw-bold" style={{ color: '#007bff' }}>
                                    Phone Number:&nbsp;&nbsp;
                                    <span style={{ fontWeight: 'normal', color: '#495057' }}>{details?.Phone_Number}</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Myprofile;
