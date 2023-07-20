import React, { useState, useRef } from "react";

import "./style.css";

function Todo(props) {

  return (
    <>
      <div className="card-box">
        <input
          type="checkbox"
          name=""
          id={props.val.id}
          onChange={(e) => {
            const id = e.target.id;
            props.ondata(id);
          }}
        />{" "}
        {props.val.task}
        <div className="bu">
          <button
            id={props.val.id}
            onClick={(e) => {
              e.preventDefault();
              props.onedit(e.target.id);
            }}
          >
            Edit
          </button>{" "}
          <button
            className="active"
            id={props.val.id}
            onClick={(e) => {
              e.preventDefault();
              props.ondel(e.target.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
// App->Todos->Todo

function Complete(props) {
  return (
    <>
      <div className="card-box">
        <ul>
          <li>
            <p>
              <strike>{props.val.task}</strike>
            </p>{" "}
            <div className="bu">
              <button
                id={props.val.id}
                onClick={(e) => {
                  props.onid(e.target.id);
                }}
                className="active"
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
function Edit(props) {

  const [edit, setedit] = useState(false);
  const { id, task } = props.dat;
  const [task1, settask1] = useState(task);
  const [edit1, setedit1] = useState({ id: id, task: task1 });
  return (
    <div className="modal">
      <div className="card-box">
        <form>
          <h2>Edit</h2>
          <label htmlFor="Task">Task:</label>
          <input
            type="text"
            required
            value={task1}
            name="task"
            onChange={(e) => {
              settask1(e.target.value);
              setedit1({ id: id, [e.target.name]: e.target.value });
            }}
          />
          <br />
          <br />
<div className="bu">
          <button
            className="close"
            onClick={(e) => {
              e.preventDefault();
              props.onedit(edit);
            }}
          >
            Close
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.onedit(edit);
              let a = props.elem;
              let b = props.index;
              a[b] = edit1;
            }}
          >
            Ok
          </button>
          </div>
          {}
        </form>
      </div>
    </div>
  );
}
export { Todo, Complete, Edit };
