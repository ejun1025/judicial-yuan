import './App.scss';
import './assets/css/ccwork.css';
import './assets/css/font-ccwork.css';
import Login from './Pages/Login/login'
import MessageBoard from './Pages/Message-board/message-board';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, useLocation } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='Login' element={<Login />}></Route>
      <Route path='MessageBoard' element={<MessageBoard />}></Route>
    </Routes>
  );
}

export default App;
