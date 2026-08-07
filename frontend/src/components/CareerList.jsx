import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function CareerList({ selectCareer }) {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`${API_URL}/careers`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch careers");
                }
                return response.json();
            })
            .then((data) => {
                setCareers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="section career-section">
                <div className="status-block">
                    <p>Loading careers...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="section career-section">
                <div className="status-block error-block">
                    <p>{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="section career-section">
            <div className="section-header">
                <h2>Choose a Career</h2>
                <p>Explore curated roadmaps and select your next path.</p>
            </div>

            {careers.length === 0 ? (
                <p className="empty-state">No careers available</p>
            ) : (
                <div className="grid career-grid">
                    {careers.map((career) => (
                        <article
                            className="card career-card"
                            key={career.name}
                        >
                            <div className="career-info">
                                <h3>{career.name}</h3>
                                <p>{career.description}</p>
                            </div>

                            <button
                                type="button"
                                className="button secondary"
                                onClick={() => selectCareer(career.name)}
                            >
                                View Roadmap
                            </button>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default CareerList;
