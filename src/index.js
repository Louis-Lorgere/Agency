import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContextWrapper from 'theme/ThemeWrapper';


ReactDOM.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>{' '}
  </ThemeContextWrapper>,
 document.getElementById('root'));