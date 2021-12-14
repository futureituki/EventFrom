import React,{useContext} from "react";

import {DELETE_EVENT,ADD_OPERATION_LOG} from '../actions'
import { timeCurrentIso8601 } from "../utils";
import AppContext from "../contexts/Appcontext";

const Event=(props)=>{
  const {event} =props
  const {dispatch}=useContext(AppContext)
  const id=event.id;
  const handleClickDeleteButton=()=>{
    const reuslt=window.confirm(`イベント(id=${id})を削除してもよろしいですか？`);
    if(reuslt){
      dispatch({type:DELETE_EVENT,id})
      dispatch({type:ADD_OPERATION_LOG,
                description:`イベント(id=${id})を削除しました`,
                time:timeCurrentIso8601()})
    }
  }
  return(
  <tr>
    <td>{id}</td>
    <td>{event.title}</td>
    <td>{event.body}</td>
    <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td></tr>
  )
}
export default Event