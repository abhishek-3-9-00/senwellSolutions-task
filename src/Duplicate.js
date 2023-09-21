import React, { useState, useEffect } from "react";
import jsonData from "./data.json"; // Import the JSON data
import "./styles.css";
const DuplicateTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const nameCountMap = jsonData.reduce((countMap, item) => {
      countMap[item.name] = (countMap[item.name] || 0) + 1;
      return countMap;
    }, {});

    const distinctNames = Object.keys(nameCountMap).map((name) => ({
      name,
      count: nameCountMap[name]
    }));

    setData(distinctNames);
  }, [data]);

  return (
    <div>
      <h1>Duplicate Names Table</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Duplicates</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.name}
                style={{
                  backgroundColor:
                    item.count > 10
                      ? "green"
                      : item.count > 2
                      ? "yellow"
                      : item.count > 0
                      ? "red"
                      : "white"
                }}
              >
                <td>{item.name}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DuplicateTable;
