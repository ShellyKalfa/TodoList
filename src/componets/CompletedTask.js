import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";

function CompletedTask({task,index,handleRemove}) {
  return (
    <div className="taskPadding">
      <div className="rightFlex"><div className=" done">done</div></div>
     <div>{task.task}</div>
      <div className="rightFlex">
        <IoIosCloseCircle onClick={()=>{handleRemove(task,index)}}  />
      </div>
    </div>

  );
}

export default CompletedTask;