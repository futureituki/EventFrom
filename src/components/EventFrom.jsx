import React from "react";
import { useState ,useContext} from "react"

import { CREATE_EVENT,
         DELETE_ALL_EVENT,
         ADD_OPERATION_LOG,
         DELETE_ALL_OPERATION_LOGS } from "../actions";
import AppContext from "../contexts/Appcontext";
import { timeCurrentIso8601 } from "../utils";

export const EventFrom =()=>{
 const {state,dispatch}=useContext(AppContext)
  const [title,setTitle]=useState("");
  const [body,setBody]=useState("")
  const addEvent=e=>{
    e.preventDefault()
    dispatch({
      type:CREATE_EVENT,
      title,
      body
    })
    dispatch({
      type:ADD_OPERATION_LOG,
      description:'イベントを作成しました',
      operatedAt:timeCurrentIso8601()
    })
    setTitle("")
    setBody("")
  }
  const deleteAllEvents=(e)=>{
     e.preventDefault()
     const result=window.confirm("全てのイベントを本当に削除しても良いですか？");
     if(result){
       dispatch({type:DELETE_ALL_EVENT})
       dispatch({
         type:ADD_OPERATION_LOG,
         description:'全てのイベントを削除しました',
         operatedAt:timeCurrentIso8601()}
        )
     }
  }
  const unCreatedTab=title==='' || body==='' 

  const deleteAllOperationLogs=(e)=>{
     e.preventDefault()
     const result=window.confirm("全ての操作ログを本当に削除してもよろしいですか？")
     if(result) dispatch({type:DELETE_ALL_OPERATION_LOGS})
  }

return(
  <>
<h4>イベント作成フォーム</h4>
<form>
  <div className="form-group">
    <label htmlFor="formEventTitle">タイトル</label>
    <input onChange={e=>setTitle(e.target.value)}  className="form-control" id="formEventTitle" value={title}/>
  </div>
  <div className="form-group">
    <label htmlFor="formEventBody">ボディー</label>
    <textarea onChange={e=>setBody(e.target.value)} className="form-control" id="formEventBody" value={body}/>
  </div>
  <button className="btn btn-primary" disabled={unCreatedTab} onClick={addEvent}>イベントを作成する</button>
  <button className="btn btn-danger" disabled={state.events.length===0} onClick={deleteAllEvents}>全てのイベントを削除する</button>
  <button className="btn btn-danger" disabled={state.operationLogs.length ===0} onClick={deleteAllOperationLogs}>全ての操作ログを削除する</button>
</form>
</>
)
}