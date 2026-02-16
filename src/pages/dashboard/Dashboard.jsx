import { useEffect, useState } from "react";

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch users");
                }
                return res.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Dashboard</h1>

            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

                {/* Total Users Card */}
                <div style={cardStyle}>
                    <h3>Total Users</h3>
                    <p>{users.length}</p>
                </div>

                {/* Example Status Card */}
                <div style={cardStyle}>
                    <h3>Total Companies</h3>
                    <p>
                        {
                            [...new Set(users.map((user) => user.company.name))].length
                        }
                    </p>
                </div>

                {/* Example City Count */}
                <div style={cardStyle}>
                    <h3>Total Cities</h3>
                    <p>
                        {
                            [...new Set(users.map((user) => user.address.city))].length
                        }
                    </p>
                </div>

            </div>
        </div>
    );
}

const cardStyle = {
    padding: "20px",
    background: "#f4f4f4",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
};

export default Dashboard;
