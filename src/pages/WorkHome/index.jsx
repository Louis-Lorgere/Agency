import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
// pages/Home/index.jsx
const WorkHome = () => (
  <div>
<h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
<p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
<nav>
  <ul>
    <li><Link to="/works/platon">Platon</Link></li>
    <li><Link to="/works/sedal">Sedal</Link></li>
    <li><Link to="/works/solane">Solane</Link></li>
  </ul>

</nav>
</div>);

export default WorkHome;