import ToDoList from './components/ApiFetch';
import Register from './components/register';
import TodoEdit from './components/editpage';
import TodoDelete from './components/deletepage';
import NoMatch from './nomatch';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Edit/id/:id" element={<TodoEdit />} />
          <Route path="/Delete/id/:id" element={<TodoDelete />} />
          <Route path="*" element={<NoMatch message="Hello Contact" />} />
      </Routes>
      </div>
  );
}

export default App;


