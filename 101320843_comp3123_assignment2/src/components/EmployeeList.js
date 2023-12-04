import './styles/EmployeeList.css'; 
import employeesData from './employees.json'; 
import React, { useState } from 'react';
import AddEmployee from './AddEmployee'; 

const EmployeeList = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [showAddForm, setShowAddForm] = useState(false);

  const addNewEmployee = (newEmployee) => {
    newEmployee.id = employees.length + 1; 
    setEmployees([...employees, newEmployee]);
    setShowAddForm(false); 
  };

  return (
    <div className="employee-management-app">
      <button className="add-btn" onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Close Form' : 'Add Employee'}
      </button>
      {showAddForm && <AddEmployee addEmployee={addNewEmployee} />}
      <div className="employee-list">
        <h2>Employees List</h2>
        <table>
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button className="btn action-btn update">Update</button>
                  <button className="btn action-btn delete">Delete</button>
                  <button className="btn action-btn view">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
