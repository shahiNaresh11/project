import { useEffect, useState } from "react";
import { getData, updateData } from "../page/api/AxiousRequest";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";


function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [FormData, setFormData] = useState({
        Name: "",
        email: "",
        Phone_Number: "",
        Address: ""


    });

    const getSingle = async () => {
        const data = await getData(`families/${id}`);
        console.log(data)
        if (data && data.attributes) {
            setFormData({
                Name: data.attributes.Name,
                email: data.attributes.email,
                Phone_Number: data.attributes.Phone_Number,
                Address: data.attributes.Address,
            })
        }
    }

    useEffect(() => {
        getSingle();


    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();


        const data =
            JSON.stringify({
                data: FormData
            });

        const response = await updateData(
            {
                url: `families/${id}`,
                data: data
            });
        if (response &&
            response.attributes &&
            response.attributes.Name == FormData.Name) {
            Swal.fire({
                icon: "success",
                title: "Data has been Updated",
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/family");


        }



    }

    return (
        <div className="container  d-flex flex-column  w-100">
            <h1 className="mt-4" style={{ marginLeft: '420px' }}>Edit Family </h1>
            <div className="row  w-100 " style={{ marginLeft: '320px' }}>
                <div className="col-lg-6 shadow mt-4 ">
                    <form onSubmit={handleSubmit} className=" ms-4">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label ">
                                Name
                            </label>
                            <input
                                type="text"
                                name="Name"
                                className="form-control border-3 w-75"
                                id="name"
                                value={FormData.Name}
                                onChange={(e) => {
                                    setFormData({
                                        ...FormData,
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
                                className="form-control border-3 w-75"
                                id="email"
                                value={FormData.email}
                                onChange={(e) => {
                                    setFormData({
                                        ...FormData,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Phone_Number" className="form-label">
                                Phone Number
                            </label>
                            <input
                                name="Phone_Number"
                                id="number"
                                className="form-control border-3 w-75"
                                value={FormData.Phone_Number}
                                onChange={(e) => {
                                    setFormData({
                                        ...FormData,
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
                                className="form-control border-3 w-75"
                                value={FormData.Address}
                                onChange={(e) => {
                                    setFormData({
                                        ...FormData,
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

    )
}
export default Edit;