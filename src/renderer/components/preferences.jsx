import React from 'react';

export default class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.savePreferences = this.savePreferences.bind(this);
    this.updateFacilityId = this.updateFacilityId.bind(this);
    this.updateShowTrayIcon = this.updateShowTrayIcon.bind(this);
    this.isActive = this.isActive.bind(this)

    this.state = {
      initialFacilityId: props.facilityId,
      initialShowTrayIcon: props.showTrayIcon,
      facilityId: props.facilityId,
      showTrayIcon: props.showTrayIcon,
    };
  }

  isActive() {
    return this.state.facilityId != this.state.initialFacilityId ||
      this.state.showTrayIcon != this.state.initialShowTrayIcon;
  }

  savePreferences() {
    let preferencesData = JSON.stringify({
      facilityId: this.state.facilityId,
      showTrayIcon: this.state.showTrayIcon
    })

    localStorage.setItem('preferences', preferencesData);

    this.setState((prevState, props) => ({
      initialFacilityId: prevState.facilityId,
      facilityId: prevState.facilityId,
      initialShowTrayIcon: prevState.showTrayIcon,
      showTrayIcon: prevState.showTrayIcon,
      active: ''
    }));
  }

  updateFacilityId(event) {
    this.setState({ facilityId: event.target.value });
  }

  updateShowTrayIcon() {
    this.setState((prevState, props) => ({ showTrayIcon: !prevState.showTrayIcon }));
  }

  render() {
    let saveButton = this.isActive() ? (
        <div className='savePreferencesButton isActive'>
          <input
            onClick={ this.savePreferences }
            type='button'
            value='Save'
          />
        </div>
    ) : (
      <div className='savePreferencesButton'>
        <input
          type='button'
          value='Save'
        />
      </div>
    )

    return (
      <div className="container">
        <h1>Preferences</h1>
        <div className='facilityId'>
          <label htmlFor='facilityId'>Facility ID</label>
          <input
            id='facilityId'
            name='facilityId'
            type='text'
            defaultValue={ this.props.facilityId }
            onChange={ this.updateFacilityId }
          />
        </div>
        <div className='showTrayIcon'>
          <input
            id='showTrayIcon'
            name='showTrayIcon'
            type='checkbox'
            checked={ this.state.showTrayIcon }
            onChange={ this.updateShowTrayIcon }
          />
          <label htmlFor='showTrayIcon'>Show tray icon</label>
        </div>
        { saveButton }
      </div>
    );
  }
}
