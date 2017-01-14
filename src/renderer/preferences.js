import React from 'react';
import ReactDOM from 'react-dom';
import Preferences from './components/preferences';

let defaultPreferences = JSON.stringify({ showTrayIcon: true })
let preferences = JSON.parse(localStorage.getItem('preferences') || defaultPreferences)

ReactDOM.render(
  <Preferences
    facilityId={ preferences.facilityId }
    showTrayIcon={ preferences.showTrayIcon }
  />,
  document.getElementById('preferences')
);
