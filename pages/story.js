import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Error from 'next/error';
import Layout from '../components/Layout';
import ReactHtmlParser from 'react-html-parser';
import CommentList from '../components/CommentList';

const Story = () => {
  const [item, setitem] = useState(null);
  let router = useRouter();
  let id = router.query.id;
  const fetch_item = async () => {
    try {
      let story_data = await axios.get(
        `https://node-hnapi.herokuapp.com/item/${id}`
      );
      console.log(story_data.data);
      setitem(story_data.data);
    } catch (error) {
      console.log(error);
      setitem(null);
    }
  };

  useEffect(() => {
    fetch_item();
  }, [id]);
  return (
    <>
      {item === null ? (
        <Error statusCode={503} />
      ) : (
        <Layout>
          <main>
            <h1 className='story-title'>
              <a href={item.url}>{item.title}</a>
            </h1>
            <div className='story-details'>
              <strong>{item.points} points</strong>
              <strong>{item.comments_count} comments</strong>
              <strong>{item.time_ago}</strong>
            </div>
            
                {item.comments.length > 0 ? (
                  <CommentList comments={item.comments} />
                ) : (
                  <div>No comments for this story</div>
                )}
              
            
          </main>
          <style jsx>
            {`
              main {
                padding: 1em;
              }
              .story-title {
                font-size: 1rem;
                font-weight: 300;
                margin: 0;
                padding-bottom: 0.5em;
              }
              .story-title a {
                text-decoration: none;
                color: #333;
              }
              .story-title a:hover {
                text-decoration: underline;
              }
              .story-details {
                font-size: 0.8rem;
                padding-bottom: 1em;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                margin-bottom: 1em;
              }
              .story-details strong {
                margin-right: 1em;
              }
              .story-details a {
                color: #f60;
              }
            `}
          </style>
        </Layout>
      )}
    </>
  );
};

export default Story;
