import './App.css';
import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext'

import CreatePost from './views/CreatePost';
import Search from './views/Search';
import Home from './views/Home';

function App() {
  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/' />
  }
  console.log(currentUser)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/create' element={
        <RequireAuth>
          <CreatePost />
        </RequireAuth>
      } />
      <Route path='/create/:id' element={
        <RequireAuth>
          <CreatePost />
        </RequireAuth>
      } />
    </Routes>
  );
}

export default App;
