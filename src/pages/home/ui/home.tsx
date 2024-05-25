import { useGetAllNewsQuery } from '@/entities/news/api/api';
import Masonry from 'react-layout-masonry';
import clsx from 'clsx';

export default function Home() {
  const { data } = useGetAllNewsQuery();

  return (
    <main className='home'>
      <Masonry columns={2} gap={'30px'}>
        {data?.map((item) => (
          <div className={clsx('news-card', item.size, item.fit)} key={item.id}>
            <div className='news-card__image'>
              <img src={item.images[0]} alt='news-image' />
            </div>
            <div className='news-card__text'>
              <div className={clsx('news-card__tag', item.tag)}>{item.tag}</div>
              <h3 className='news-card__title'>{item.title}</h3>
              <div className='news-card__date'>{item.date}</div>
            </div>
          </div>
        ))}
      </Masonry>
    </main>
  );
}
