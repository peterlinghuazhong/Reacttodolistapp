import TodoItem from "./Todoitem";

function TodoList(props) {
  const { todos, setTodos } = props;
  return (
    <ul className="list-group">
      {/* <TodoItem label="abc" isCompleted={true} />
      <TodoItem label="def" isCompleted={false} />
      <TodoItem label="333" isCompleted={false} /> */}
      {/* .map is basically foreach with rendering */}
      {todos.map((todo, index) => {
        const { label, id, isCompleted } = todo;
        return (
          <TodoItem
            key={id}
            id={id}
            isCompleted={isCompleted}
            label={label}
            num={index + 1}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
