function TodoItem(props) {
  const { id, label, isCompleted, todos, setTodos } = props;
  const handleRemove = () => {
    const confirmRemove = confirm("Are you sure you want to remove this task?");
    // if confirmRemove is true, remove the student
    if (confirmRemove) {
      // remove the student from list
      // use filter to keep everything except the student you want to remove
      const updatelabel = todos.filter((item) => {
        // return true is keep; return false is dump
        // if the item's id is not the same as the current student id, we keep it
        if (item.id !== id) {
          return true; // keep
        } else {
          return false; // dump
        }
      });
      // update the list state
      setTodos(updatelabel);
    }
  };
  const updateCompeleted = () => {
    const updatedlist = [...todos];
    const selected = updatedlist.find((item) => item.id === id);
    selected.isCompleted = !selected.isCompleted;
    setTodos(updatedlist);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted ? (
          <button className="btn btn-sm btn-success" onClick={updateCompeleted}>
            <i className="bi bi-check-square"></i>
          </button>
        ) : (
          <button className="btn btn-sm" onClick={updateCompeleted}>
            <i className="bi bi-square"></i>
          </button>
        )}
        <span
          style={isCompleted ? { color: "grey" } : { color: "black" }}
          className={isCompleted ? "ms-2 text-decoration-line-through" : "ms-2"}
        >
          {label}
        </span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger" onClick={handleRemove}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
