import { useGetNewsByIdQuery } from '@/entities/news/api/api';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';

export default function news() {
  const { id } = useParams();

  const { data } = useGetNewsByIdQuery(id);
  console.log(data);

  return (
    <>
      <main className='news'>
        <article className='article-news'>
          <header>
            <h1 className='heading-primary'>{data?.title}</h1>
            <div className='article__meta'>
              <div className={clsx('news-card__tag', data?.tag)}>
                {data?.tag}
              </div>
              <div className='news-card__date'>{data?.date}</div>
            </div>
          </header>
          
        </article>
      </main>
    </>
  );
}
