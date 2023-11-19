import React from 'react';
import {useState} from "react";
import {MdCheckCircle} from "react-icons/md";
import {IoIosCloseCircle} from "react-icons/io";
import {AiTwotoneEdit} from "react-icons/ai";

function UncompletedTask({task, index, handleCheck, handleUpdateText, handleRemove}) {
  const [onEdit, setOnEdit] = useState(false);
  const [text,setText]=useState("");
  const handlerChange = (e) => {
    setText(e.target.value)
  }
  return (
    <>
      {!onEdit ?
        <div className="taskUncompleted">
          <div>{task.task}</div>
          <div className="rightFlex">
            <MdCheckCircle onClick={() => {
              handleCheck(task, index)
            }}/>
            <AiTwotoneEdit onClick={() => {
              setOnEdit(true)
            }}/>
            <IoIosCloseCircle onClick={() => {
              handleRemove(task, index)
            }}/>
          </div>
        </div> :

        <div className="taskPadding changText">
          <input type="text" onChange={(e)=>{handlerChange(e)}}/>
          <div>
          <MdCheckCircle onClick={() => {
            handleUpdateText(task,index,text)
            setOnEdit(false)
          }}/>
          <IoIosCloseCircle onClick={() => {
            setOnEdit(false)
          }}/>
        </div>
        </div>
      }
    </>
  );
}

export default UncompletedTask;