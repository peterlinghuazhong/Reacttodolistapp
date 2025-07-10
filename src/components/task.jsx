function Task(props) {
  const name = props.name;
  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <h5 className="mb-0">1. {name}</h5>
    </div>
  );
}

export default Task;
