import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './AppRegister';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


// const AppIndex
// = () => {
//     return (
//       <div>
//         <BrowserRouter>
//           <Link to="</>">テキスト</Link>
//           <Routes>
//             <Route path='/' elemant = {<App/>} />
//             <Route path='/Register' elemant = {<Register/>} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     );
// }

// export default AppIndex;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
