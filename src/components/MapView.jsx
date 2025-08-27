import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Helper component to update map center
function MapUpdater({ selectedLocation }) {
    const map = useMap();
    if (selectedLocation) {
        map.setView(selectedLocation, 13);
    }
    return null;
}

export default function MapView({ jobs, selectedLocation }) {
    return (
        <MapContainer
            center={[-25.2744, 133.7751]} 
            zoom={4}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            {jobs.map((job) => (
                <Marker
                    key={job.companyId}
                    position={[job.latitude, job.longitude]}
                >
                    <Popup>
                        <strong>{job.companyName}</strong>
                        <br />
                        {job.industry}
                        <br />
                        {job.address}
                    </Popup>
                </Marker>
            ))}
            <MapUpdater selectedLocation={selectedLocation} />
        </MapContainer>
    );
}
