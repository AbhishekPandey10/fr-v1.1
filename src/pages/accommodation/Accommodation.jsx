import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './Accommodation.scss';

const Accommodation = () => {
  return (
    <div className="pageContainer">
      <Topbar />
      <div className="contentContainer">
        <Sidebar className="sidebar" />
        <div className="mainContent">
          <section>
            <h2>On-campus Housing</h2>
            <p>Find information about dorms and residential halls.</p>
          </section>
          <section>
            <h2>Off-campus Listings</h2>
            <p>Explore available off-campus accommodations with search and filter options.</p>
          </section>
          <section>
            <h2>Roommate Finder</h2>
            <p>Utilize this tool to help students find potential roommates.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
