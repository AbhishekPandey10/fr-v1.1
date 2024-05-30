import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const handlehome = () => {
    navigate('/');
  };

  const handleprofile = () => {
    navigate('/profile');
  };

  const handlesettings = () => {
    navigate('/settings');
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">ActsConnect</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarLinks">
          <span className="topbarLink" onClick={handlehome}>Home</span>
          <span className="topbarLink" onClick={handlesettings}>Settings</span>
          <span className="topbarLink" onClick={handleLogout}>Logout</span>
          <span className="topbarLink" onClick={handleprofile}>Profile</span>
        </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}
