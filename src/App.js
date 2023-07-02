import './App.css';
import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext'
import 'react-toastify/dist/ReactToastify.css';

import CreatePost from './views/CreatePost';
import Search from './views/Search';
import Home from './views/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/' />
  }
  return (
    <>
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
      
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
