import React from 'react';
import './JobSidebar.css';

const JobSidebar = ({ jobs, onJobClick, activeJobId }) => {
  return (
    <div className="jobSidebar">
      <h2>Job Listings</h2>
      <ul className="jobSidebarList">
        {jobs.map((job) => (
          <li
            key={job.id}
            className={`jobSidebarItem ${activeJobId === job.id ? 'active' : ''}`}
            onClick={() => onJobClick(job.id)}
          >
            <h4>{job.title}</h4>
            <p>{job.company}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobSidebar;
