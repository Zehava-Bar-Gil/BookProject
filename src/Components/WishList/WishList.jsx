import React from 'react';
import { BsBookmarkCheck } from 'react-icons/bs';
import { CgFileRemove } from 'react-icons/cg';
import './WishList.css'


function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}><BsBookmarkCheck/></button>
          <button onClick={() => removeTodo(index)}><CgFileRemove/></button>
        </div>
      </div>
    );
  }
  
  function TodoForm ({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }
  
  function WishList() {
    const [todos, setTodos] = React.useState([
       {
         text: "Book List:"
       },
      { 
        text: "Inspire Science",
        isCompleted: false
      },
      {
        text: "Design",
        isCompleted: false
      },
      {
        text: "React",
        isCompleted: false
      }
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
  
    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };
  
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return (
      <div className="wishList">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    );
  }
  
  export default WishList;


