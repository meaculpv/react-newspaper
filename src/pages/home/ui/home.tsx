// import Masonry from 'react-responsive-masonry';
import { useGetAllNewsQuery } from '@/entities/news/api/api';
import { News } from '@/shared/types/News';

export default function Home() {
  const { data, error, isLoading } = useGetAllNewsQuery();

  return (
    <>
      <main className='home'>
        <h1>Home page</h1>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data?.map((news: News) => <h2 key={news.id}>{news.title}</h2>)
        ) : (
          'asd'
        )}
      </main>
    </>
  );
}
