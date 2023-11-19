import React from 'react';

function SortButtens({handelClick}) {
  return (
    <>
      <button className="buttonInsertToDo" onClick={()=>{handelClick("active")}} > active </button>
      <button className="buttonInsertToDo" onClick={()=>{handelClick("completed")}} > completed </button>
      <button className="buttonInsertToDo" onClick={()=>{handelClick("all")}} > all </button>
    </>
  );
}

export default SortButtens;