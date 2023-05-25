//omar's show all users/profiles ours will be comments 

import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_COMMENTS, REMOVE_COMMENT } from '../utils/mutations/commentsMutations';
import styled from 'styled-components';

// Styled-components
const CommentCard = styled.div`
  background-color: dark;
  color: light;
  padding: 2rem;
  margin-bottom: 1rem;
`;

const CommentText = styled.p`
  color: white;
  font-size: 1rem;
`;

const DeleteButton = styled(Link)`
  display: block;
  background-color: light;
  color: dark;
  text-align: center;
  padding: 0.5rem;
  margin-top: 1rem;
`;

// CommentList component
const CommentList = ({ questionId }) => {
  const { loading, error, data } = useQuery(GET_COMMENTS, { 
    variables: { questionId }
  });
  
  const [removeComment] = useMutation(REMOVE_COMMENT);

  const deleteComment = async (commentId) => {
    // Implement your delete comment logic here.
    // This is just a placeholder for actual function.
    try {
      await removeComment({ variables: { commentId } });
    } catch (error) {
      console.error('Failed to remove comment', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data.comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <div>
      <h3>Comments</h3>
      {data.comments.map((comment) => (
        <CommentCard key={comment._id}>
          <h4>{comment.commentAuthor}</h4>
          <CommentText>{comment.commentText}</CommentText>
          <DeleteButton onClick={() => deleteComment(comment._id)}>Delete Comment</DeleteButton>
        </CommentCard>
      ))}
    </div>
  );
};

export default CommentList;
