import React, { useState } from 'react';
import './styles/AddEmployee.css'; 

const AddEmployee = ({ addEmployee }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addEmployee({ firstName, lastName, email });
  };

  return (
    <div className="add-employee-form">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email Id:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn save">Save</button>
          <button type="button" className="btn cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
