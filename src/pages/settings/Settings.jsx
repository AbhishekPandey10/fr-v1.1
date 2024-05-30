import React, { useState } from 'react';
import './Settings.css';
import Topbar from '../../components/topbar/Topbar';
import SettingsSidebar from '../../components/settingsSidebar/SettingsSidebar';
import Sidebar from '../../components/sidebar/Sidebar';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [preferences, setPreferences] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Profile updated successfully');
  };

  const handleTogglePreference = (preference) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [preference]: !prevPreferences[preference],
    }));
  };

  return (
    <div className="settingsPage">
      <Topbar />
      <div className="settingsContainer">
      <Sidebar/>
        <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="settingsContent">
          <h2 className="settingsTitle">Settings</h2>
          {activeTab === 'profile' && (
            <form className="settingsForm" onSubmit={handleUpdateProfile}>
              <div className="settingsSection">
                <h3>Profile Information</h3>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="settingsInput"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="settingsInput"
                  required
                />
              </div>
              <button className="settingsButton" type="submit">
                Update Profile
              </button>
            </form>
          )}
          {activeTab === 'password' && (
            <form className="settingsForm" onSubmit={handleUpdateProfile}>
              <div className="settingsSection">
                <h3>Change Password</h3>
                <input
                  type="password"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="settingsInput"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="settingsInput"
                />
              </div>
              <button className="settingsButton" type="submit">
                Change Password
              </button>
            </form>
          )}
          {activeTab === 'preferences' && (
            <div className="settingsSection">
              <h3>Preferences</h3>
              <div className="settingsPreference">
                <label>
                  <input
                    type="checkbox"
                    checked={preferences.notifications}
                    onChange={() => handleTogglePreference('notifications')}
                  />
                  Enable Notifications
                </label>
              </div>
              <div className="settingsPreference">
                <label>
                  <input
                    type="checkbox"
                    checked={preferences.darkMode}
                    onChange={() => handleTogglePreference('darkMode')}
                  />
                  Dark Mode
                </label>
              </div>
              <button className="settingsButton" onClick={handleUpdateProfile}>
                Save Preferences
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
