import React, { useState, useEffect } from "react";
import Sector from "./Sector";
import Navbar from "./Navbar";
import axios from "axios";

const User = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col bg-[#e8e8e8] w-full h-full relative">
        <Navbar />
        <Sector />
        <Table employees={employees} />
      </div>
    </>
  );
};

const Table = (props) => {
  const { employees } = props;
  return (
    <div className="flex justify-center">
      <table className="w-1/2">
        <thead>
          <tr>
            <th className="border border-solid border-[#b9b9b9] bg-black/6 h-8 pl-3 py-2">
              <div className="text-center text-xs font-semibold leading-[15.6px]">
                Name
              </div>
            </th>
            <th className="border border-solid border-[#b9b9b9] bg-black/6 h-8 pl-3 py-2">
              <div className="text-center text-xs font-semibold leading-[15.6px]">
                Last Name
              </div>
            </th>
            <th className="border border-solid border-[#b9b9b9] bg-black/6 h-8 pl-3 py-2">
              <div className="text-center text-xs font-semibold leading-[15.6px]">
                Position
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border border-solid border-[#b9b9b9] bg-white w-48 h-8">
                {employee.name}
              </td>
              <td className="border border-solid border-[#b9b9b9] bg-white w-48 h-8">
                {employee.lastname}
              </td>
              <td className="border border-solid border-[#b9b9b9] bg-white w-48 h-8">
                {employee.position}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
