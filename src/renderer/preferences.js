import React from 'react';
import ReactDOM from 'react-dom';
import Preferences from './components/preferences';

let preferences = JSON.parse(localStorage.getItem('preferences') || '{}')

ReactDOM.render(
  <Preferences
    facilityId={ preferences.facilityId }
    showTrayIcon={ preferences.showTrayIcon }
  />,
  document.getElementById('preferences')
);
