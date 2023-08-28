import logo from './logo.svg';
import './App.css';

 import React, { useState } from 'react'
import Simplelist from './Funccomp/Simplelist';
 
 const App = () => {
    const [task1, setTask ] = useState("")
     const [list, settodo] = useState([])
     const Handlinglist = e =>{
     setTask(e.target.value)
  }
 const deletehandling =(indexvalue)=>{
   const newtodolist= list.filter((todo,index) => index !== indexvalue)
   settodo(newtodolist)
 }
  const submithadling = e =>{
    e.preventdefault();
    const newtodolist =[...list, task1]
    settodo(newtodolist)
    setTask("")
  }

   return (
     <div>
       <center>
         <div className="card">
           <div className="card-body">
             <h2 className="card-title"> TO DO List </h2>
             <form onSubmit={submithadling}>
               <input size="60" type="text" name="task" value={task1} onChange={Handlinglist}/> <br></br>
               <input type="submit" value="ADD" name="ADD"/>
            </form>
                <Simplelist todolist={list} deletehandling={deletehandling}/>
            </div>
          </div>
       </center>
     </div>
   );
 }

export default App;
