import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';
import { useSelector } from 'react-redux';

export const Header = () => {
  const auth = useSelector((state) => state.auth.value);
  const basket = useSelector((state) => state.basket.value);
  return (
    <nav className={'bg-slate-900 text-white fixed w-full top-0'}>
      <div
        className={
          'container md:flex items-center md:justify-between mx-auto grid px-12'
        }
      >
        <div className={'flex items-center h-full px-8'}>
          <h1 className={'mr-2 md:text-xl'}>PLUGGED.IN</h1>
          <Link to={'/'}>
            <img src={logo} alt={'logo'} className={'w-8'} />
          </Link>
        </div>
        <ul className={'flex items-center'}>
          <li className={' p-4'}>
            <Link to={'/'}>Главная</Link>
          </li>
          <li className={'p-4'}>
            <Link to={'products'}>Товары</Link>
          </li>
        </ul>
        <div className={'flex items-center'}>
          <div className={'flex md:p-0 p-1 items-center'}>
            <Link
              to={'/basket'}
              className={
                'md:bg-blue-500 rounded-md px-4 py-2 flex hover:bg-sky-100 hover:text-black'
              }
            >
              <span className={'px-2'}>Корзина</span>
              <div className={'bg-sky-100 rounded-full px-2 text-black'}>
                {0 || basket.items.length}
              </div>
            </Link>
            {auth.isLogged ? (
              <Link to={`/profile/${auth.userId}`} className={'px-4'}>
                Личный кабинет
              </Link>
            ) : (
              <Link
                to={'/auth'}
                className={'md:bg-blue-500 md:px-8 py-3 rounded-md mx-2'}
              >
                Войти
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
