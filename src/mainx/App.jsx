import React,{useState} from 'react'
import Todos from './Todos'
export default function App() {
    let todos = [
      {
        id: 1,
        task: "learn javascript",
      },
      {
        id: 2,
        task: "learn react",
      },
    ];
    const [addtodo,setaddtodo]=useState(todos)
 const data=(value)=>{
    addtodo.push(value)

 }

    return <>
    <Todos ondata={data} data={addtodo} />
    </>;
  }

// App->Todos->Todo 