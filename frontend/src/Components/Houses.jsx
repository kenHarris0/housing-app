import React, { useState } from "react";
import HOUSES from "../assets/house.json";

export default function Houses() {
  const uniqueTypes = [...new Set(HOUSES.map((h) => h.house_type.trim()))];
  const status = [...new Set(HOUSES.map((h) => h.Status.trim()))];
  const uniqueCities = [...new Set(HOUSES.map((h) => h.city.trim()))];

  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [sortType, setSortType] = useState("");

  const filteredHouses = HOUSES.filter((h) => {
    return (
      (selectedType === "" || h.house_type.trim() === selectedType) &&
      (selectedStatus === "" || h.Status.trim() === selectedStatus) &&
      (selectedCity === "" || h.city.trim() === selectedCity)
    );
  });

  if (sortType === "lowtohigh") {
    filteredHouses.sort((a, b) => a.price - b.price);
  } else if (sortType === "hightolow") {
    filteredHouses.sort((a, b) => b.price - a.price);
  } else if (sortType === "sizelowhigh") {
    filteredHouses.sort(
      (a, b) => a.house_size.slice(0, -7) - b.house_size.slice(0, -7)
    );
  } else if (sortType === "sizehighlow") {
    filteredHouses.sort((a, b) => b.house_size - a.house_size);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🏠 House Listings</h2>

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

      <label htmlFor="statusType" style={{ marginLeft: "20px" }}>
        Choose Status:
      </label>
      <select
        id="statusType"
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="">-- Show All --</option>
        {status.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>

      <label htmlFor="cityType" style={{ marginLeft: "20px" }}>
        Choose City:
      </label>
      <select
        id="cityType"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="">-- Show All --</option>
        {uniqueCities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      <label htmlFor="sortType" style={{ marginLeft: "20px" }}>
        Sort By:
      </label>
      <select
        id="sortType"
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="">-- Show All --</option>
        <option value="lowtohigh">Price Low to High</option>
        <option value="hightolow">Price High to Low</option>
        <option value="sizelowhigh">Size Low to High</option>
        <option value="sizehighlow">Size High to Low</option>
      </select>

      <div style={{ marginTop: "20px" }}>
        <h3>Showing Filtered Houses</h3>
        {filteredHouses.length > 0 ? (
          <ul>
            {filteredHouses.map((house, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                <strong>{house.house_type}</strong> — {house.price} —
                {house.house_size}—{house.location} — {house.Status} —{" "}
                {house.city}
              </li>
            ))}
          </ul>
        ) : (
          <p>No houses available for this selection.</p>
        )}
      </div>
    </div>
  );
}
