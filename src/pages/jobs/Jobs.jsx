import React, { useState } from 'react';
import Topbar from '../../components/topbar/Topbar';
import JobSidebar from '../../components/jobSidebar/JobSidebar';
import './Jobs.css';
import Sidebar from '../../components/sidebar/Sidebar';

const Job = () => {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'Bangalore, India',
      description: 'We are looking for a skilled Frontend Developer with experience in React.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Innovatech',
      location: 'Hyderabad, India',
      description: 'Join our team as a Backend Developer, proficient in Node.js and Express.',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Solutions',
      location: 'Mumbai, India',
      description: 'Seeking a talented UI/UX Designer to create amazing user experiences.',
    },
  ];

  const [activeJobId, setActiveJobId] = useState(jobs[0].id);

  const activeJob = jobs.find(job => job.id === activeJobId);

  return (
    <div className="pageContainer">
      <Topbar />
      <div className="contentContainer">
      <Sidebar/>
        <JobSidebar jobs={jobs} onJobClick={setActiveJobId} activeJobId={activeJobId} />
        <div className="jobDetailsContainer">
          <h2>Job Details</h2>
          {activeJob && (
            <div className="jobDetails">
              <h3>{activeJob.title}</h3>
              <p><strong>Company:</strong> {activeJob.company}</p>
              <p><strong>Location:</strong> {activeJob.location}</p>
              <p>{activeJob.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Job;
