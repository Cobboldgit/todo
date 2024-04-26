import { useEffect, useState } from 'react';
import './App.css';
import InputComponent from "./components/InputComponent"

function App() {

  const [todos, setTodos] = useState([])


  const onChange = (value) => {
    setTodos([...todos, value])
  }

  const listTodos = () => {
    console.log("List to function has been initiated");
    todos.map((value, i) => console.log(i + " => ", value))

  }

  useEffect(() => {
    listTodos()
  }, [todos])

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <InputComponent onChange={onChange}/>
    </div>
  );
}

export default App;
