import React from "react";

const OperationLog=(props)=>{
  const {operationLog} =props
  return(
    <>
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
    </>
  )
}

export default OperationLog