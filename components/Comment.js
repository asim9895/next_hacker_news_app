import ReactHtmlParser from 'react-html-parser';

const Comment = ({ comment }) => (
  <div className='comment'>
    <div className='comment-user'>{comment.user}</div>
    <div className='comment-content'>{ReactHtmlParser(comment.content)}</div>
    {comment.comments && (
      <div className='nested-comments'>
        {comment.comments.map((nestedComment) => (
          <Comment key={nestedComment.id} comment={nestedComment} />
        ))}
      </div>
    )}

    <style jsx>{`
      .comment {
        margin-bottom: 1.5em;
      }
      .comment-user {
        font-size: 0.9rem;
        font-weight: bold;
        margin-bottom: 0.5em;
      }
      .comment-content {
        font-size: 0.9rem;
      }
      
      .nested-comments {
        margin-top: 1em;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        padding-left: 1em;
      }
    `}</style>
  </div>
);

export default Comment;
