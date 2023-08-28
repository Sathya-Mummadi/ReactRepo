import React from 'react'

 const Simplelist = ({todolist, deletehandling}) => {
  return (
    <div>
        {todolist.map((todo,index) =>
        <div key= {index}>
            <h5>{todo} &nbsp; <button onClick={()=> deletehandling(index)}></button></h5>
        </div>
        )}
    </div>
  )
}

 
export default Simplelist;