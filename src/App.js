import ToDoList from './ToDoList';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToDoList/>
        <Link to="/page1">Page1</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;


