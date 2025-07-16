import TodoItem from "./Todoitem";

function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="list-group">
      {/* <TodoItem label="abc" isCompleted={true} />
      <TodoItem label="def" isCompleted={false} />
      <TodoItem label="333" isCompleted={false} /> */}
      {/* .map is basically foreach with rendering */}
      {todos.map((todo, index) => {
        const { label, id } = todo;
        return <TodoItem key={id} label={label} num={index + 1} />;
      })}
    </ul>
  );
}

export default TodoList;
