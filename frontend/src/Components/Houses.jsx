import React, { useState } from "react";
import HOUSES from "../assets/house.json";

export default function Houses() {
  // Extract unique house types from JSON
  const uniqueTypes = [...new Set(HOUSES.map((h) => h.house_type.trim()))];
  const status = [...new Set(HOUSES.map((h) => h.Status.trim()))];

  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  // Filter houses by selected type
  const filteredHouses = selectedType
    ? HOUSES.filter((h) => h.house_type.trim() === selectedType)
    : HOUSES;

  const filteredStatus = selectedStatus
    ? HOUSES.filter((h) => h.Status.trim() === selectedStatus)
    : HOUSES;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🏠 House Listings</h2>

      {/* Dropdown */}
      <label htmlFor="houseType">Choose House Type: </label>
      <select
        id="houseType"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="">-- Show All --</option>
        {uniqueTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select
        id="statusType"
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        {status.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* List of Houses */}
      <div style={{ marginTop: "20px" }}>
        <h3>
          {selectedType ? `Showing ${selectedType} Houses` : "All Houses"}
        </h3>
        {filteredHouses.length > 0 ? (
          <ul>
            {filteredHouses.map((house, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                <strong>{house.house_type}</strong> — {house.price} —{" "}
                {house.location}
              </li>
            ))}
          </ul>
        ) : (
          <p>No houses available for this type.</p>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>
          {selectedStatus ? `Showing ${selectedStatus} Houses` : "All Houses"}
        </h3>
        {filteredStatus.length > 0 ? (
          <ul>
            {filteredStatus.map((house, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                <strong>{house.house_type}</strong> — {house.price} —{" "}
                {house.location}
              </li>
            ))}
          </ul>
        ) : (
          <p>No houses available for this type.</p>
        )}
      </div>
    </div>
  );
}
