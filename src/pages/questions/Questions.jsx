import React, { useState } from 'react';
import './Questions.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [questionFile, setQuestionFile] = useState(null);
  const [assignmentFile, setAssignmentFile] = useState(null);
  const [directions, setDirections] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleQuestionUpload = (e) => {
    e.preventDefault();
    if (questionFile && directions.trim() && dueDate) {
      setQuestions([...questions, { file: questionFile, directions, dueDate }]);
      setQuestionFile(null);
      setDirections('');
      setDueDate('');
    }
  };

  const handleAssignmentUpload = (e) => {
    e.preventDefault();
    if (assignmentFile) {
      setAssignments([...assignments, { file: assignmentFile }]);
      setAssignmentFile(null);
    }
  };

  return (
    <div className="pageContainer">
      <Topbar />
      <div className="contentContainer">
        <Sidebar />
        <div className="questionsContainer">
          <div className="q_uploadSection">
            <h2>Upload a Question</h2>
            <form onSubmit={handleQuestionUpload} className="uploadForm">
              <input
                type="file"
                accept=".pdf,.zip"
                onChange={(e) => setQuestionFile(e.target.files[0])}
                className="fileInput"
              />
              <textarea
                value={directions}
                onChange={(e) => setDirections(e.target.value)}
                placeholder="Enter directions"
                className="directionsInput"
              />
              <input
                type="datetime-local"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="dueDateInput"
              />
              <button type="submit" className="uploadButton">Upload Question</button>
            </form>
            <h3>Uploaded Questions</h3>
            <ul className="questionList">
              {questions.map((question, index) => (
                <li key={index} className="questionListItem">
                  <a href={URL.createObjectURL(question.file)} download>{question.file.name}</a>
                  <p>{question.directions}</p>
                  <p>Due: {new Date(question.dueDate).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="a_uploadSection">
            <h2>Submit Assignment</h2>
            <form onSubmit={handleAssignmentUpload} className="uploadForm">
              <input
                type="file"
                accept=".pdf,.zip"
                onChange={(e) => setAssignmentFile(e.target.files[0])}
                className="fileInput"
              />
              <button type="submit" className="uploadButton">Submit Assignment</button>
            </form>
            <h3>Submitted Assignments</h3>
            <ul className="assignmentList">
              {assignments.map((assignment, index) => (
                <li key={index} className="assignmentListItem">
                  <a href={URL.createObjectURL(assignment.file)} download>{assignment.file.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
