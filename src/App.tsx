import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux';

// Store Configurated
import store from './store/store';

import Error from './views/404/Error';
import Login from './views/Auth/Login';
import Dashboard from './views/Layout/Dashboard';

// Pages
import Layout from './views/Layout';
import Home from './views/pages/Home';
import Favorite from './views/pages/Favorite';
import Library from './views/pages/Library';
import ReproductionList from './views/pages/ReproductionList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Page */}
          <Route path='*' element={<Error />} />

          {/* Dashboard Administrative */}
          <Route path="/admin" element={<Dashboard />}>

          </Route>

          {/* Pages */}
          <Route path="/" element={<Layout />}>
            <Route path=""  element={<Home />} />
            <Route path="favorites"  element={<Favorite />} />
            <Route path="library" element={<Library />} />
            <Route path="library/:slug" element={<ReproductionList />} />
          </Route>

          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </Provider>
  )
}

export default App
