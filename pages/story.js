import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Error from 'next/error';
import Layout from '../components/Layout';

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
    <Layout>
      {item === null ? (
        <Error statusCode={503} />
      ) : (
        <>
          <h3>{item.title}</h3>
        </>
      )}
    </Layout>
  );
};

export default Story;
