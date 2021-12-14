import React from "react";
import { useContext } from 'react';

import Event from './Event'
import AppContext from "../contexts/Appcontext";

export const Events=()=>{
 const {state}=useContext(AppContext)
  return(
    <>
    <h4>イベント一覧</h4>
    <table className="table table-hover">
     <thead>
       <tr>
         <th>ID</th>
         <th>タイトル</th>
         <th>ボディー</th>
         <th></th>
       </tr>
     </thead>
     <tbody>
       {state.events.map((event)=>(<Event key={event.id} event={event}/>))}
     </tbody>
    </table>
    </>
  )
}