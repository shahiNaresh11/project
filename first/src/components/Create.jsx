import { useState } from "react";

import Swal from "sweetalert2";
import { createData } from "../page/api/AxiousRequest";

function Create() {
    const [formData, setFormData] = useState({
        Name: "",
        email: "",
        Phone_Number: "",
        Address: "",
        user_id: {
            "data": {
                "id": 1,
                "attributes": {
                    "Name": "Naresh",
                    "email": "naresh@gmail.com",
                    "createdAt": "2024-09-30T09:58:29.084Z",
                    "updatedAt": "2024-09-30T10:44:49.918Z",
                    "publishedAt": "2024-09-30T10:18:06.426Z",
                    "Password": "123",
                    "Phone_Number": "989768878",
                    "Address": "kapan"
                }
            }
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const data = JSON.stringify({
            data: formData,
        });

        try {
            const response = await createData({
                url: "families",
                data: data,
            });

            if (response && response.attributes && response.attributes.Name === formData.Name) {
                Swal.fire({
                    icon: "success",
                    title: "Data has been saved",
                    showConfirmButton: false,
                    timer: 1500,
                });

                setFormData({
                    Name: "",
                    email: "",
                    Phone_Number: "",
                    Address: "",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Failed to save data",
                    text: "Please try again.",
                    showConfirmButton: true,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Something went wrong!",
            });
        }
    };

    return (
        <div className="container mt-5 d-flex flex-column  w-100">
            <h1 className="" style={{ marginLeft: '420px' }}>Create Family</h1>
            <div className="row  w-100 " style={{ marginLeft: '320px' }}>
                <div className="col-lg-6 shadow mt-4  ">
                    <form onSubmit={handleSubmit} className="ms-5">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                name="Name"
                                className="form-control w-75 border-3"
                                id="name"
                                value={formData.Name}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="form-control w-75 border-3"
                                id="email"
                                value={formData.email}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Phone_Number" className="form-label border-3">
                                Phone Number
                            </label>
                            <input
                                name="Phone_Number"
                                id="number"
                                className="form-control w-75 border-3"
                                value={formData.Phone_Number}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Address
                            </label>
                            <input
                                name="Address"
                                id="address"
                                className="form-control w-75 border-3"
                                value={formData.Address}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary  w-75 mb-5 mt-2">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create;
