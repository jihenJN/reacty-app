function Todo({task,description, togglePopup}) {

  return (
    <>
      <div className="todo-item">
        <h2>{task}</h2>
        <span>{description}</span>
        <button onClick={togglePopup}>delete</button>
      </div>
    </>
  );
}

export default Todo;
