import React from 'react';
import '../index.css';

const ViewAllQuestionsButton = ({ onClick }) => {
    return (
        <div className="sidebar">
      <button className="submit" onClick={onClick}>
        View All Questions
      </button>
      </div>
    );
};

export default ViewAllQuestionsButton;