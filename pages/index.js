import Error from 'next/error';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Index = () => {
  let router = useRouter();
  const [stories, setstories] = useState([]);
  let page = Number(router.query.page) || 1;

  const fetch_stories = async () => {
    try {
      let story_data = await axios.get(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      console.log(story_data);
      setstories(story_data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch_stories();
  }, [page]);

  return (
    <Layout title='Hacker News' description='List Of All Hacker News'>
      {stories.length === 0 ? (
        <Error statusCode={503} />
      ) : (
        <StoryList stories={stories} />
      )}
      <footer>
        <Link href={`/?page=${page + 1}`}>
          <a>Next Page ({page + 1})</a>
        </Link>
      </footer>

      <style jsx>{`
        footer {
          padding: 1em;
        }

        footer a {
          font-weight: bold;
          color: black;
          text-decoration: none;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
