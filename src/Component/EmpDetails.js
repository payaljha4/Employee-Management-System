import React from 'react'

export const EmpDetails = ({detail, onDelete}) => {
    return (
        <>
        <div>
           <h4>{detail.title}</h4>
           <p>{detail.dept}</p>
           <p>{detail.email}</p>
           <p>{detail.number}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(detail)}}>Delete</button>
        </div>
        <hr />
        </>
    )
}
