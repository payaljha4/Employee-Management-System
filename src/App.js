import './App.css';
import Header from './Component/Header';
import {Footer} from './Component/Footer';
import {DetailsList} from './Component/DetailsList';
import React, { useState, useEffect } from 'react';
import { AddEmployee } from './Component/AddEmployee';
import { About } from './Component/About';
import { Login } from './Component/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  let initDetail;
  if(localStorage.getItem("details")){
    initDetail=[];
  }
  else{
    initDetail = JSON.parse(localStorage.getItem("details"));
  }

  const onDelete=(detail)=>{
    console.log("I am ondelete of detail", detail)
    setDetails(details.filter((e)=>{
      return e!==detail;
    }));
    localStorage.setItem("details", JSON.stringify(details));
  }
  const addEmployee=(title, dept, email, number)=>{
    console.log("I am adding this employee", title, dept, email, number);
    let sno;
    if(details.length===0){
      sno=0;
    }
    else{
      sno = details[details.length-1].sno+1;
    }
    const myDetail={
      sno: sno,
      title: title,
      dept: dept,
      email: email,
      number: number,
    }
    setDetails([...details, myDetail]);
    console.log(myDetail);
    
    
    localStorage.setItem("details", JSON.stringify(details));
    
  }
  const [details, setDetails]=useState([]);
  return (
    <>
    <Router>
    
        
        
    <Header title="Employee Management System" searchBar={true}/>
    
    
    
   
          <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>  
            
            <Login />
            </>)
          }}>
    
          </Route>
          <Route exact path="/home" render={()=>{
            return(
            <>  
            <AddEmployee addEmployee={addEmployee}/>
    <DetailsList details={details} onDelete={onDelete}/>
    </>)
          }}>
            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
        </Switch>
        
    <Footer/>
        
    </Router>
    </>
  );
}

export default App;
