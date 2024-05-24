import { Link, BrowserRouter } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className='footer'>
        <BrowserRouter>
          <nav className='footer__nav'>
            <ul>
              <li>
                <Link to={'/'} className='footer__link'>
                  Акпарат
                </Link>
              </li>
              <li>
                <Link to={'/'} className='footer__link'>
                  Адебиет
                </Link>
              </li>
              <li>
                <Link to={'/'} className='footer__link'>
                  Онер
                </Link>
              </li>
              <li>
                <Link to={'/'} className='footer__link'>
                  Гылым
                </Link>
              </li>
              <li>
                <Link to={'/'} className='footer__link'>
                  Эксклюзив
                </Link>
              </li>
              <li>
                <Link to={'/'} className='footer__link'>
                  Карьера
                </Link>
              </li>
              <li>
                <Link to={'/'} className='footer__link'>
                  Спорт
                </Link>
              </li>
              <li>
                <Link to={'/'} className='footer__link'>
                  Тарих
                </Link>
              </li>
            </ul>
          </nav>
          <div className='footer__email'>
            <p>
              Байланыс ушин:{' '}
              <a href='mailto:magzhankz@gmail.com'>magzhankz@gmail.com</a>
            </p>
          </div>
          <div className='footer__copyright'>
            <p>Барлык кукыктар сакталган@2024.</p>
          </div>
        </BrowserRouter>
      </footer>
    </>
  );
}
