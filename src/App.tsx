import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux';

// Store Configurated
import store from './store/store';

// pages
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Layout from './pages/Layout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path=""  element={<Home />} />
            <Route path="favorites"  element={<Favorite />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
