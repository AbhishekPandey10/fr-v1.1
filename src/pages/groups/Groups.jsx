import React, { useState } from 'react';
import './Groups.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Groups = () => {
  const [groupName, setGroupName] = useState('');
  const [groups, setGroups] = useState([]);

  const handleCreateGroup = (e) => {
    e.preventDefault();
    if (groupName.trim()) {
      setGroups([...groups, { name: groupName }]);
      setGroupName('');
    }
  };

  return (
    <div className="pageContainer">
      <Topbar />
      <div className="contentContainer">
        <Sidebar />
        <div className="groupsContainer">
          <h2>Create a New Group</h2>
          <form onSubmit={handleCreateGroup} className="createGroupForm">
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name"
              className="groupInput"
            />
            <button type="submit" className="createGroupButton">Create Group</button>
          </form>
          <h3>Existing Groups</h3>
          <ul className="groupList">
            {groups.map((group, index) => (
              <li key={index} className="groupListItem">
                {group.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Groups;
