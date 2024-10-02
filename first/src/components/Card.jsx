import { useEffect, useState } from "react";
import { getData } from "../page/api/AxiousRequest";

function Card() {
    const userId = localStorage.getItem("identityId");

    const [total, setTotal] = useState(0);

    const Name = localStorage.getItem("name");
    const getTotal = async () => {
        const response = await getData(`families?filters[user_id][id][$eq]=${userId}&populate=*`);

        if (response) {
            setTotal(response);
            console.log(response.length);
        }
    };

    useEffect(() => {
        getTotal();
    }, []);

    return (
        <div className="container w-50 mt-5">
            <div className="card shadow-lg rounded mx-auto" style={{ backgroundColor: '#f8f9fa', border: 'none' }}>
                <div className="card-header bg-primary text-white text-center p-4 rounded-top">
                    <h2 className="mb-0">Welcome, {Name}</h2>
                </div>
                <div className="card-body text-black p-4">
                    <h4 className="fw-bold">My Family</h4>
                    <p className="fs-5">
                        Family Count: <span className="fw-bold">{total.length}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
