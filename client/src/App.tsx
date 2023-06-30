import React, { useEffect } from 'react';
import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostsPage from './pages/PostsPage';
import AddPostPage from './pages/AddPostPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useAppDispatch } from './redux/hooks';
import { getMe } from './redux/authSlice';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMe())
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/addPost' element={<AddPostPage />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
