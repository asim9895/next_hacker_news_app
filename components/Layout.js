import Link from 'next/Link';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Layout = ({ children, title, description }) => {
  let router = useRouter();
  return (
    <>
      <div className='container'>
        <Head>
          <title>{title}</title>
          <meta name='description' content={description} />
        </Head>
        <nav>
          <span
            style={{
              fontSize: '0.9rem',
              paddingRight: '1em',
              cursor: 'pointer',
            }}
            onClick={() => router.back()}>
            {'<'}
          </span>
          <Link href='/'>
            <a>
              <span className='main-title'>Hacker News</span>
            </a>
          </Link>
        </nav>
        {children}
      </div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: #f6f6ef;
        }
        nav {
          background: #f60;
          padding: 1em;
        }
        nav > * {
          display: inline-block;
          color: black;
        }

        nav a {
          text-decoration: none;
        }
        nav .main-title {
          font-weight: bold;
        }
      `}</style>
      <style global jsx>{`
        body {
          background: white;
          font-family: Verdana;
        }
      `}</style>
    </>
  );
};

export default Layout;
