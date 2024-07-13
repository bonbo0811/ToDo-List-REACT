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
          {/* 一覧表示ページへ遷移 */}
          <Route path="/Register" element={<Register />} />
          {/* 新規登録ページへ遷移 */}
          <Route path="/Edit/id/:id" element={<TodoEdit />} />
          {/* Todo編集ページへ遷移 */}
          <Route path="/Delete/id/:id" element={<TodoDelete />} />
          {/* Todo削除ページへ遷移 */}
      </Routes>
      </div>
  );
}

export default App;


