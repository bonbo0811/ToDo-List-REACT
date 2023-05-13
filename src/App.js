import ToDoList from './ToDoList';
import Register from './register';
import TodoEdit from './editpage';
import TodoDelete from './deletepage';
import NoMatch from './nomatch';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Edit" element={<TodoEdit />} />
          <Route path="/Delete" element={<TodoDelete />} />
          <Route path="*" element={<NoMatch message="Hello Contact" />} />
      </Routes>
      </div>
  );
}

export default App;


