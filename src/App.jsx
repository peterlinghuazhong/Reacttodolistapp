import AddNew from "./components/add";
import Tasklist from "./components/list";

function App() {
  return (
    <div
      class="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div class="card-body">
        <h3 class="card-title mb-3">My Todo List</h3>
        <Tasklist />
        <AddNew />
      </div>
    </div>
  );
}

export default App;
