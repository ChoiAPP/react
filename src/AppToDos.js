
import { useState } from "react";

function App() {
  const [todo , setTodo] = useState("");
  const [ todos , setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(todo ==="") {
      return;
    }
    setTodos(currentArray => [todo, ...currentArray]); // ...array => array요소들을 새 어레이 요소로, 아니면 어레이가 한 요소 됨 
    setTodo("")
  }
  console.log(todos);
  console.log(todos.map((item, index) => <li key={index }>{item}</li>));
  return (
    <div>
      <h1>My to dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} type={"text"} placeholder="write your to do.." />
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
      {todos.map((item, index) => <li key={index }>{item}</li>)}
      </ul>
    </div>
  );
}
export default App;
