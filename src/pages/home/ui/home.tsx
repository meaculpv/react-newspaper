import { useGetAllNewsQuery } from '@/entities/news/api/api';
import Masonry from 'react-layout-masonry';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const { data } = useGetAllNewsQuery(1);

  return (
    <main className='home'>
      <Masonry columns={2} gap={'30px'}>
        {data?.data?.map((item) => (
          <Link
            key={item.id}
            to={`/news/${item.id}`}
            className='news-card__link'
          >
            <div
              className={clsx('news-card', item.size, item.fit)}
              key={item.id}
            >
              <div className='news-card__image'>
                <img src={item.images[0]} alt='news-image' />
              </div>
              <div className='news-card__text'>
                <div className={clsx('news-card__tag', item.tag)}>
                  {item.tag}
                </div>
                <h3 className='news-card__title'>{item.title}</h3>
                <div className='news-card__date'>{item.date}</div>
              </div>
            </div>
          </Link>
        ))}
      </Masonry>
    </main>
  );
}
