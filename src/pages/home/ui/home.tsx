import Masonry from 'react-responsive-masonry';
import { useGetAllNewsQuery } from '@/entities/news/api/api';

export default function Home() {
  const { data } = useGetAllNewsQuery();

  return (
    <main className='home'>
      <Masonry columns={3} gutter={'10px'}>
        {data?.map((item) => (
          <div className='news-card' key={item.id}>
            <div className='news-card__image'>
              <img src={item.images[0]} alt='news-image' />
            </div>
            <div className='news-card__text'>
              <div className='news-card__tag'>{item.tag}</div>
              <h3 className='news-card__title'>{item.title}</h3>
              <div className='news-card__date'>{item.date}</div>
            </div>
          </div>
        ))}
      </Masonry>
    </main>
  );
}
