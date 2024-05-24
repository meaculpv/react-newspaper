import { BrowserRouter, Link, Route, Router } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className='header'>
        <div className='header__top'>
          <h1 className='header__logo'>
            <span className='header__logo--forward'>Мен жастарға сенемін</span>
            Magzhan.kz
            <span className='header__logo--backward'>Магжан Жумабаев</span>
          </h1>
        </div>
        <BrowserRouter>
          <div className='header__bottom'>
            <nav className='navigation__nav'>
              <ul className='navigation__list'>
                <li className='navigation__item'>
                  <Link to={'/'} className='navigation__link'>
                    Акпарат
                  </Link>
                </li>
                <li className='navigation__item'>
                  <Link to={'/'} className='navigation__link'>
                    Адебиет
                  </Link>
                </li>
                <li className='navigation__item'>
                  <Link to={'/'} className='navigation__link'>
                    Онер
                  </Link>
                </li>
                <li className='navigation__item'>
                  <Link to={'/'} className='navigation__link'>
                    Гылым
                  </Link>
                </li>
                <li className='navigation__item'>
                  <Link to={'/'} className='navigation__link'>
                    Эксклюзив
                  </Link>
                </li>
                <li className='navigation__item'>
                  <Link to={'/'} className='navigation__link'>
                    Карьера
                  </Link>
                </li>
                <li className='navigation__item'>
                  <Link to={'/'} className='navigation__link'>
                    Спорт
                  </Link>
                </li>
                <li className='navigation__item'>
                  <Link to={'/'} className='navigation__link'>
                    Тарих
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </BrowserRouter>
      </header>
    </>
  );
}
