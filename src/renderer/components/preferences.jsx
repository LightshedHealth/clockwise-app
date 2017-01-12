import React from 'react';

export default class Preferences extends React.Component {
  constructor(props) {
    super(props)
    this.savePreferences = this.savePreferences.bind(this)
  }

  savePreferences() {
    console.log('savePreferences');
  }

  render() {
    return (
      <div className="container">
        <h1>Preferences</h1>
        <div className='facilityId'>
          <label htmlFor='facilityId'>Facility ID</label>
          <input name='facilityId' type='text' />
        </div>
        <div className='showTrayIcon'>
          <input name='showTrayIcon' type='checkbox' />
          <label htmlFor='showTrayIcon'>Show tray icon</label>
        </div>
        <div className='savePreferencesButton'>
          <input
            onClick={this.savePreferences}
            type='button'
            value='Save'
          />
        </div>
      </div>
    );
  }
}
