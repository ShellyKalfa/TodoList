import React from 'react';
import '../asset/componets.css'
import CompletedTask from "./CompletedTask";
import UncompletedTask from "./UncompletedTask";

function SortList({data,update,remove}) {
  const handleCheck=(Task,index)=>{
    Task=({
      ...Task,
      hasItBeenDone: true
    })
    update({index,todo:Task})
  }
  const handleRemove=(task,index)=>{
    remove({index,todo:task})
  }
  const handleUpdateText=(Task,index,text)=>{
    Task=({
      ...Task,
      task:text
    })
    update({index,todo:Task})

  }

  return (
    <>
      <div className="containerTaskDiv">
        {
          data.map((todo,index) => (
            <div key={index} className="taskDiv">
              {
                todo.hasItBeenDone?
                  <CompletedTask task={todo}
                                 index={index}
                                 handleRemove={remove} />:
                  <UncompletedTask task={todo}
                                   index={index}
                                   handleCheck={handleCheck}
                                   handleUpdateText={handleUpdateText}
                                   handleRemove={handleRemove}/>
              }
            </div>
          ))
        }
      </div>
    </>
  );
}

export default SortList;