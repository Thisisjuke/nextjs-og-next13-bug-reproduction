import Link from 'next/link'

const Home = () => {
  return (
        <div>
          <Link href={'/api/og'}>
            <span>
              Go to /api/og
            </span>
          </Link>
        </div>
  );
};

export default Home