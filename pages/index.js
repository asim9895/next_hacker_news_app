import Error from 'next/error';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StoryList from '../components/StoryList';

const Index = () => {
  const [stories, setstories] = useState([]);

  const fetch_stories = async () => {
    try {
      let story_data = await axios.get(
        'https://node-hnapi.herokuapp.com/news?page=1'
      );
      console.log(story_data);
      setstories(story_data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch_stories();
  }, []);

  return (
    <>
      <h1>Hacker News</h1>
      {stories.length === 0 ? (
        <Error statusCode={503} />
      ) : (
        <StoryList stories={stories} />
      )}
    </>
  );
};

export default Index;
