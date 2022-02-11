import "./App.css"
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import About from 'pages/About';
import Home from 'pages/Home';
import NavBar from 'components/Navbar';
import Works from 'pages/Works';
import WorkHome from 'pages/WorkHome';

const App = () => (
  <div>
    <BrowserRouter>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<WorkHome/>}/>
          <Route path="/works/:workTitle" element={<Works/>} />
        </Routes>
      </main>
    </BrowserRouter>
  </div>
);

export default App;
