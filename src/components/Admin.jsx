import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sector from "./Sector";

const Admin = () => {
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    lastname: "",
    position: "",
  });

  const [newList, setNewList] = useState([]);

  useEffect(() => {
    
    const initialData = [

    ];

    setNewList(initialData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({
      ...newEmployee,
      [name]: value,
    });
  };

  const addNewEmployee = () => {
    if (newEmployee.name && newEmployee.lastname && newEmployee.position) {
      setNewList([...newList, newEmployee]);
      setNewEmployee({
        name: "",
        lastname: "",
        position: "",
      });
    }
  };

  const deleteMember = (index) => {
    const updatedList = [...newList];
    updatedList.splice(index, 1);
    setNewList(updatedList);
  };

  return (
    <div className="flex flex-col h-[100vh] bg-[#e8e8e8]">
      <Navbar />
      <Sector />
      <div className="w-screen bg-[#e8e8e8]">
        <h1 className="ml-[200px] text-2xl font-bold">Create User Here</h1>
        <br />
        <div className="flex w-full justify-center gap-10">
          <div className="border-solid border-[#ababab] w-[300px] overflow-hidden bg-white flex flex-col mb-1 h-12 items-start pl-3 py-2 border rounded">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={newEmployee.name}
              onChange={handleChange}
              className="text-sm w-full h-full font-inter leading-28 px-2 outline-none border-[#e2e1e5] bg-transparent rounded"
            />
          </div>
          <div className="border-solid border-[#ababab] w-[300px] overflow-hidden bg-white flex flex-col mb-1 h-12 items-start pl-3 py-2 border rounded">
            <input
              type="text"
              id="lastName"
              name="lastname"
              placeholder="Last Name"
              value={newEmployee.lastname}
              onChange={handleChange}
              className="text-sm font-inter w-full h-full leading-28 px-2 outline-none border-[#e2e1e5] bg-transparent rounded"
            />
          </div>
          <div className="border-solid  border-[#ababab] w-[300px] overflow-hidden bg-white flex flex-col mb-1 h-12 items-start pl-3 py-2 border rounded">
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Position"
              value={newEmployee.position}
              onChange={handleChange}
              className="text-sm font-inter w-full h-full leading-28 px-2 outline-none border-[#e2e1e5] bg-transparent rounded"
            />
          </div>
          <button
            className="bg-blue-600 w-[100px] border rounded text-white"
            onClick={addNewEmployee}
          >
            SAVE
          </button>
        </div>

        <div className="flex justify-center">
          <table className="w-2/3 border-collapse border border-sky-500 mt-10">
            <thead>
              <tr>
                <th className="bg-gray-300 px-4 py-2">Name</th>
                <th className="bg-gray-300 px-4 py-2">Last Name</th>
                <th className="bg-gray-300 px-4 py-2">Position</th>
                <th className="bg-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {newList.map((items, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{items.name}</td>
                  <td className="border px-4 py-2">{items.lastname}</td>
                  <td className="border px-4 py-2">{items.position}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => deleteMember(index)}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};


export default Admin;
