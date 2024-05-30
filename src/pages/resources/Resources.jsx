import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './Resources.scss';

const Resources = () => {
  return (
    <div className="pageContainer">
      <Topbar />
      <div className="contentContainer">
        <Sidebar/>
        <div className="mainContent">
          <section>
            <h2>Library Resources</h2>
            <p>Access to the library catalog, e-books, and research databases.</p>
          </section>
          <section>
            <h2>Online Journals</h2>
            <p>Links to online journals and academic papers.</p>
          </section>
          <section>
            <h2>Downloadable Tools</h2>
            <p>Section for downloading software, tools, and other resources.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resources;
