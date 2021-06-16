import React from 'react'
import { EmpDetails } from './EmpDetails'

export const DetailsList = (props) => {
    let myStyle={
        minHeight:"70vh",
        margin:"40px auto"
    }
    return (
        <div className="container" style={myStyle}>
           <h3 className=" my-3"> Employee Details List</h3>
           {props.details.length===0? "No Details to Display":
           props.details.map((detail)=>{
               return(
               
               <EmpDetails detail={detail} key={detail.sno} onDelete={props.onDelete}/>
                
               )
               
           })
           }
           
        </div>
    )
}
