import React from 'react';
import './SettingsSidebar.css';

const SettingsSidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="settingsSidebar">
      <ul className="settingsSidebarList">
        <li
          className={`settingsSidebarItem ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile Information
        </li>
        <li
          className={`settingsSidebarItem ${activeTab === 'password' ? 'active' : ''}`}
          onClick={() => setActiveTab('password')}
        >
          Change Password
        </li>
        <li
          className={`settingsSidebarItem ${activeTab === 'preferences' ? 'active' : ''}`}
          onClick={() => setActiveTab('preferences')}
        >
          Preferences
        </li>
      </ul>
    </div>
  );
};

export default SettingsSidebar;
