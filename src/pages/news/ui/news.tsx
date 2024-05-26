import {
  useGetCommentsByPostIdQuery,
  useGetNewsByIdQuery,
} from '@/entities/news/api/api';
import { incrementLikes } from '@/entities/news/model/newsSlice';
import clsx from 'clsx';
import {
  FacebookTag,
  Instagram,
  ProfileCircle,
  ThumbsUp,
  X,
} from 'iconoir-react';
import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function News() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data } = useGetNewsByIdQuery(id);
  useGetCommentsByPostIdQuery(id);
  const { article, comments } = useSelector((state) => state.news);
  const {
    data: article2,
    error,
    isLoading,
    refetch,
  } = useGetNewsByIdQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  function handleLike() {
    dispatch(incrementLikes(id));
  }

  useEffect(() => {
    refetch(); // refetch when id changes
  }, [id, refetch]);

  return (
    <>
      <main className='news'>
        <article className='article-news'>
          <header className='article__header'>
            <h1 className='heading-primary'>{article.title}</h1>
            <div className='article__meta'>
              <div className={clsx('news-card__tag', article.tag)}>
                {article.tag}
              </div>
              <div className='article__date'>
                <p>{moment(article.date).format('DD MMM YYYY')}</p>
              </div>
            </div>
            <img
              src={article.images}
              alt={article.tag}
              className='article__image'
            />
          </header>
          <section className='section-desc'>
            <p className='article__text'>{article.description}</p>
          </section>
          <section className='section-take'>
            <div className='divider'>&nbsp;</div>
            <p className='article__take'>{article.importantTake}</p>
            <div className='divider'>&nbsp;</div>
          </section>
          <section className='section-actions'>
            <button className='btn btn--like' onClick={handleLike}>
              <ThumbsUp
                className='like'
                color='#1c2a4b'
                width={30}
                height={30}
              />
              <p>Like ({article.likes})</p>
            </button>
            <div className='article__social'>
              <div className='article__icon'>
                <FacebookTag color='#1c2a4b' width={30} height={30} />
              </div>
              <div className='article__icon'>
                <X color='#1c2a4b' width={30} height={30} />
              </div>
              <div className='article__icon'>
                <Instagram color='#1c2a4b' width={30} height={30} />
              </div>
            </div>
          </section>
        </article>
        <article className='article-comments'>
          {comments.map((comment) => (
            <div className='comment' key={comment.id}>
              <ProfileCircle color='#1c2a4b' width={50} height={50} />
              <p>{comment.text}</p>
            </div>
          ))}
        </article>
      </main>
    </>
  );
}
