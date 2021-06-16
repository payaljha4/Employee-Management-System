import React from 'react';
import { useState } from 'react';
export const AddEmployee = (props) => {
    const [title, setTitle] = useState("");
    const [dept, setDept] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !dept || !email || !number){
            alert("Column is Blank")
        }
        else{
        props.addEmployee(title, dept, email, number);
        setTitle("");
        setDept("");
        setEmail("");
        setNumber("");
        }

    }
    return (
        <div className="container my-3">
            <h3> Add Employee Details</h3>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Employee Name</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="dept" className="form-label">Department</label>
    <input type="text" value={dept} onChange={(e)=>{setDept(e.target.value)}} className="form-control" id="department"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="email" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="number" className="form-label">Phone No</label>
    <input type="Number" value={number} onChange={(e)=>{setNumber(e.target.value)}} className="form-control" id="number" aria-describedby="emailHelp"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add Employee</button>
</form>
        </div>
    )
}
