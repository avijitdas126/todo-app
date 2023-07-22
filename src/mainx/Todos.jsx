import React, { useState } from "react";
//usetate,state lifting(data passing from parent to child or child to parent)
import "./style.css";
import { Todo, Complete, Edit } from "./todo";

export default function Todos(props) {
  function password() {
    let pass = "1234567890987654321";
    let a = "";
    for (let i = 0; i < 11; i++) {
      let ramdom = Math.floor(Math.random() * 20);
      a = a + pass.charAt(ramdom);
    }
    return a;
  }
  let data3 = localStorage.getItem("completetodo");
  if (data3) {
    data3 = JSON.parse(data3);
  } else {
    data3 = [];
  }

  const [complete, setcomplete] = useState(data3);

  console.log(data3);

  let data = props.data;
  let data2 = localStorage.getItem("incompletetodo");

  data2 = JSON.parse(data2);

  console.log(data2);
  console.log(data3);
  const [addnewTodo, setaddnewTodo] = useState({ id: password(), task: "" });

  const [edit, setedit] = useState(false);
  const [completestatus, setcompletestatus] = useState(false);
  const [incomplete, setincomplete] = useState(data2);
  const { id, task } = addnewTodo;
  const [cob, setcob] = useState("");
  const handleChange = (e) => {
    setaddnewTodo({ ...addnewTodo, [e.target.name]: e.target.value });
  };
  const value = (id) => {
    if (id.length > 0) {
      data = incomplete.filter((elem) => {
        return elem.id != id;
      });
      let filtered = incomplete.filter((elem) => {
        return elem.id == id;
      });
      const result = filtered.reduce((obj, item, index) => {
        obj[index] = item;
        return obj;
      });
      complete.push(result);
      setcompletestatus(true);

      setincomplete(data);
    }
  };
  let [index, setindex] = useState("");
  let [array, setarray] = useState("");
  const value3 = (data) => {
    setedit(data);
  };
  const value2 = (data) => {
    if (data.length > 0) {
      setedit(true);
      let filtered = incomplete.filter((elem, index1, array1) => {
        if (elem.id == data) {
          setindex(index1);
          setarray(array1);
        }
        return elem.id == data;
      });
      const result = filtered.reduce((obj, item, index) => {
        obj[index] = item;
        return obj;
      });
      setcob(result);
    }
  };
  {
    localStorage.setItem("incompletetodo", JSON.stringify(incomplete));
  }
  {
    localStorage.setItem("completetodo", JSON.stringify(complete));
  }
  // {
  // setincomplete(JSON.parse(data2))}
  let val = (data) => {
    let fil = incomplete.filter((elem) => {
      return elem.id != data;
    });
    setincomplete(fil);
  };
  const value1 = (data) => {
    data = complete.filter((elem) => {
      return elem.id != data;
    });
    setcomplete(data);
  };

  const dat = [];
  incomplete.forEach((elem) => {
    dat.push(
      <Todo
        key={elem.id}
        val={elem}
        ondata={value}
        onedit={value2}
        ondel={val}
      />
    );
  });
  const dat1 = [];
  complete.forEach((elem) => {
    dat1.push(<Complete key={elem.id} val={elem} onid={value1} />);
  });
  return (
    <>
      <div className="box">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            incomplete.push(addnewTodo);
            setaddnewTodo({ id: password(), task: "" });
          }}
        >
          <h2>Todo Application</h2>
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            required
            placeholder="Add task"
            onChange={handleChange}
            name="task"
            value={task}
          />
          <br />
          <br />
          <button>Add New Todo</button>
        </form>
      </div>

      <div className="card">
        <div className="incomplete-card">
          <h1>
            <u>incomplete tasks</u>
          </h1>
          {dat}
        </div>
        <div className="complete-card">
          <h1>
            <u>complete tasks</u>
          </h1>
          {dat1}
        </div>

        {edit && <Edit onedit={value3} index={index} elem={array} dat={cob} />}
      </div>
    </>
  );
}
// App->Todos->Todo
