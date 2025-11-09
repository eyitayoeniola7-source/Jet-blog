import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { TagsPage } from './pages/TagsPage';
import { ArticlesPage } from './pages/ArticlesPage';
import SignUpPage from './pages/SignUpPage';    
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen  bg-gradient-to-b from-purple-300 to-white'>
      <Header />
      
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/tags' element={<TagsPage />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;