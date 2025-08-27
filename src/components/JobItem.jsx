import React from "react";

export default function JobItem({
    job,
    contacted,
    toggleContacted,
    onViewOnMap,
}) {
    return (
        <div className="border p-2 mb-2 rounded">
            <h3 className="font-bold">{job.companyName}</h3>
            <p>{job.address}</p>
            <p>{job.state}</p>
            <p>{job.industry}</p>
            <p>📧 {job.email}</p>
            <p>📞 {job.phoneNumber}</p>

            <div className="mt-2 flex gap-2">
                <label>
                    <input
                        type="checkbox"
                        checked={contacted}
                        onChange={() => toggleContacted(job.companyId)}
                    />
                    <span className="ml-1">Contacted</span>
                </label>

                <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => onViewOnMap(job)}
                >
                    View on Map
                </button>
            </div>
        </div>
    );
}
