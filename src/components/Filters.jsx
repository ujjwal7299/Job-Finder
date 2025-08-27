import React from "react";

export default function Filters({ filters, setFilters, jobs }) {
    const uniqueStates = [...new Set(jobs.map((job) => job.state))];
    const uniqueIndustries = [...new Set(jobs.map((job) => job.industry))];

    return (
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200">
            {/* Search */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                     Search Company
                </label>
                <input
                    type="text"
                    placeholder="Type company name..."
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={filters.search}
                    onChange={(e) =>
                        setFilters({ ...filters, search: e.target.value })
                    }
                />
            </div>

           
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                     State
                </label>
                <select
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={filters.state}
                    onChange={(e) =>
                        setFilters({ ...filters, state: e.target.value })
                    }
                >
                    <option value="">All States</option>
                    {uniqueStates.map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </div>

           
            <div>
                <label className="block text-gray-700 font-semibold mb-2">
                     Industry
                </label>
                <select
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={filters.industry}
                    onChange={(e) =>
                        setFilters({ ...filters, industry: e.target.value })
                    }
                >
                    <option value="">All Industries</option>
                    {uniqueIndustries.map((industry) => (
                        <option key={industry} value={industry}>
                            {industry}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
