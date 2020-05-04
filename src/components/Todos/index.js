import React, { useState, useEffect } from 'react';
import './style.scss';

const Todos = ({ todos, deleteTodo, total }) => {
  const [tot, setTot] = useState(0);
  useEffect(() => {
    const total = todos.reduce((acc, current) => {
      return acc + Number(current.price);
    }, 0);
    setTot(total);

    return () => {};
  }, [todos, total]);

  const TodoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div
          className='todo-item'
          key={todo.id}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          <div>
            <span>Name: </span>
            {todo.name}
          </div>
          <div>
            <span>Quantity: </span>
            {todo.quantity}
          </div>
          <div>
            <span>Price: </span>
            {todo.price}
          </div>
        </div>
      );
    })
  ) : (
    <p className='todo-item'>You have no Items on your list</p>
  );
  return (
    <div className='todos-collection'>
      <div className='todo-item titles'>
        <div>Name</div>
        <div>Quantity</div>
        <div>Price</div>
      </div>
      {TodoList}
      <div className='todo-item total'>
        <div>Total</div>
        <div></div>
        <div>{tot}</div>
      </div>
    </div>
  );
};

export default Todos;
