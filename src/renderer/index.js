import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';

let facilityId = JSON.parse(localStorage.getItem('preferences')).facilityId
ReactDOM.render(
  <Main facilityId={ facilityId } />,
  document.getElementById('app')
);
