import { useEffect, useState } from "react";
import { deleteData, getData } from "../page/api/AxiousRequest";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const userId = localStorage.getItem("identityId");

function MyFamily() {
    const [listfamily, setListfamily] = useState([]);

    const getList = async () => {
        try {
            // Fetch all family members related to the userId
            const response = await getData(`families?filters[user_id][id][$eq]=${userId}&populate=*`);

            if (response) {
                console.log("Setting listfamily state with:", response.data); // Log the data
                setListfamily(response); // Set the state with the data array
            } else {
                console.log("No family data found.");
                setListfamily([]);
            }

        } catch (error) {
            console.error("Error fetching family list:", error);
        }
    };

    const deleteFamiliesData = async (id) => {
        Swal.fire({
            icon: "warning",
            title: "Do you want to delete?",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: "No",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // Delete family member by ID
                    const data = await deleteData(`families/${id}`);
                    if (data) {
                        Swal.fire({
                            icon: "success",
                            title: "Family member has been deleted",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        getList(); // Refresh the list after deletion
                    }
                } catch (error) {
                    console.error("Error deleting family member:", error);
                }
            } else if (result.isDenied) {
                Swal.fire({
                    icon: "info",
                    title: "Changes are not saved",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <>
            <div className="div1 d-flex justify-content-between mt-4 me-4" style={{ marginLeft: '120px' }}>
                <h1 className="text-decoration-underline">List Of Family</h1>
                <Link to="/create-family" className="btn btn-info d-flex align-items-center">
                    <FaPlus /> New Family
                </Link>
            </div>

            <div className="tb" style={{ marginLeft: '80px', marginTop: '40px' }}>
                <table className="table ps-5 pt-5" style={{ width: '90%' }}>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th style={{ paddingLeft: '70px' }} scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Address</th>
                            <th style={{ paddingLeft: '50px' }} scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listfamily.length > 0 ? (
                            listfamily.map((item, idx) => (


                                <tr key={idx}>
                                    <td>{item.id}</td>

                                    <td>{item.attributes.Name}</td>
                                    <td style={{ paddingLeft: '50px' }}>{item.attributes.email}</td>
                                    <td style={{ paddingRight: '100px' }}>{item.attributes.Phone_Number}</td>
                                    <td>{item.attributes.Address}</td>
                                    {/* <td>
                                        Accessing the related user_id data
                                        {item.attributes.user_id && item.attributes.user_id.data ? (
                                            <span>
                                                {item.attributes.user_id.data.attributes.Name} (
                                                {item.attributes.user_id.data.attributes.email})
                                            </span>
                                        ) : (
                                            "No User Info"
                                        )}
                                    </td> */}
                                    <td style={{ width: '10px' }}>
                                        <Link
                                            to={`/family-edit/${item.id}`}
                                            className="btn btn-primary btn-sm d-flex align-items-center gap-2 w-100 pe-3"
                                        >
                                            <CiEdit /> Edit
                                        </Link>
                                    </td>
                                    <td style={{ width: '24px' }}>
                                        <button
                                            onClick={() => deleteFamiliesData(item.id)}
                                            className="btn btn-danger btn-sm d-flex align-items-center gap-2 w-75 ms-2"
                                        >
                                            <MdDelete /> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">
                                    No family members found.
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </>
    );
}

export default MyFamily;
