// Importing necessary packages and components
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../graphql/mutations';

// Defining the CommentForm component
const CommentForm = ({ questionId }) => {
  // Using React useState hook to manage commentText state
  const [commentText, setCommentText] = useState('');

  // Using Apollo useMutation hook to execute ADD_COMMENT mutation
  // This will return a mutate function (addComment) and data about the mutation's execution
  const [addComment, { error }] = useMutation(ADD_COMMENT, {
    // Defining variables for the mutation
    variables: {
      questionId,
      commentText,
    },
    // After the mutation is successfully completed, clear the textarea
    onCompleted: () => setCommentText(''),
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    // Prevent page from reloading on form submission
    event.preventDefault();
    // If there is text in the comment, execute the addComment function
    if (commentText) {
      addComment();
    }
  };

  // Return statement to render form to the screen
  return (
    <div>
      {/* Comment submission form */}
      <form onSubmit={handleSubmit}>
        {/* Text area for user to type their comment */}
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write your comment..."
        />
        {/* Submit button to trigger form submission */}
        <button type="submit">Add Comment</button>
      </form>
      {/* If there's an error during the mutation, display an error message */}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

// Export CommentForm component for use in other parts of the application
export default CommentForm;