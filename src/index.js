import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import "./style.css" -> style.css 파일을 따로 만들어서 직접 설정해주는 방법

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
