import Link from 'next/Link';

const StoryList = ({ stories }) => {
  return (
    <>
      <div className='story-list'>
        {stories.length > 0 &&
          stories.map((s, i) => (
            <div className='story' key={s.id}>
              <h2 className='story-title'>
                <a href={s.url}>{s.title}</a>
              </h2>
              <div className='story-details'>
                <span>{s.points || 0} points</span>
                <Link href={`/story?id=${s.id}`}>
                  <a>{s.comments_count || 0} comments</a>
                </Link>
              </div>
            </div>
          ))}
      </div>

      <style jsx>{`
        .story-list {
          padding: 0 1em;
        }

        .story {
          padding: 1em 0;
        }
        .story-title {
          font-size: 1rem;
          font-weight: 400;
          margin: 0;
          margin-bottom: 0.5em;
        }
        .story-title a {
          color: #333;
          text-decoration: none;
        }
        .story-title a:hover,
        .story-details a:hover {
          text-decoration: underline;
        }
        .story-details {
          font-size: 0.8em;
          font-weight: bold;
        }
        .story-details span {
          margin-right: 1em;
        }
        .story-details a {
          color: #6600ff;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default StoryList;
