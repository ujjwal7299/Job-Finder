import React, { useState, useEffect } from "react";
import jobsData from "../jobs.json";
import Filters from "./components/Filters";
import JobList from "./components/JobList";
import MapView from "./components/MapView";

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    state: "",
    industry: "",
    search: "",
  });
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    setJobs(jobsData); 
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      (filters.state ? job.state === filters.state : true) &&
      (filters.industry ? job.industry === filters.industry : true) &&
      (filters.search
        ? job.companyName.toLowerCase().includes(filters.search.toLowerCase())
        : true)
  );

  return (
    <div className="flex h-screen">
      {/* Filters   */}
      <div className="w-1/3 p-4 overflow-y-auto border-r">
        <Filters filters={filters} setFilters={setFilters} jobs={jobs} />
        {/* Job List */}
        <JobList jobs={filteredJobs} setSelectedLocation={setSelectedLocation} />
      </div>

      {/* Right: Map */}
      <div className="w-2/3">
        <MapView jobs={filteredJobs} selectedLocation={selectedLocation} />
      </div>
    </div>
  );
}
