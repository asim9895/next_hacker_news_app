import Comment from './Comment';
import React from 'react';

const CommentList = ({ comments }) => (
  <React.Fragment>
    {comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </React.Fragment>
);

export default CommentList;
