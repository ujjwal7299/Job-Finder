import React, { useState } from "react";

export default function JobList({ jobs, setSelectedLocation }) {
    const [contacted, setContacted] = useState([]);

    const toggleContacted = (id) => {
        setContacted((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );
    };

    return (
        <div>
            {jobs.map((job) => (
                <div
                    key={job.companyId}
                    className={`border p-3 mb-3 rounded ${contacted.includes(job.companyId) ? "bg-green-100" : "bg-white"
                        }`}
                >
                    <h2 className="font-bold text-lg">{job.companyName}</h2>
                    <p>{job.industry}</p>
                    <p>{job.address}</p>
                    <p>
                        Email: <a className="text-blue-600" href={`mailto:${job.email}` }>{job.email}</a>
                    </p>

                    <p>Phone: {job.phoneNumber}</p>

                    <div className="mt-2 flex gap-2">
                        <button
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                            onClick={() =>
                                setSelectedLocation([job.latitude, job.longitude])
                            }
                        >
                            View on Map
                        </button>
                        <button
                            className="bg-gray-500 text-white px-3 py-1 rounded"
                            onClick={() => toggleContacted(job.companyId)}
                        >
                            {contacted.includes(job.companyId) ? "Contacted" : "Mark Contacted"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
