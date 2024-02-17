import userIcon from '../assets/images/UI/user-circle-icon-png.png';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from '../features/authSlice';
import { Link, useLoaderData } from 'react-router-dom';
import { Button } from '../components/Button';
import { authUser } from '../features/basketSlice';
export const loader = ({ params }) => params;

export const Profile = () => {
  const auth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const { number } = useLoaderData();
  const buttonRedirect = () => {
    dispatch(logOut());
  };
  const authProfile = () => {
    dispatch(logIn(number));
    dispatch(authUser(number));
  };

  if (auth.isLogged)
    return (
      <div className={'p-4 justify-center bg-blue-200 text-white'}>
        <div
          className={
            'flex p-8 bg-slate-900 rounded-md items-center justify-between'
          }
        >
          <img
            src={userIcon}
            width={'46px'}
            className={'rounded-md m-2'}
            alt={'user-ico'}
          />
          <h1>Мой профиль</h1>
          <Link
            to={`/orders/${auth.userId}`}
            className={'p-4 text-black bg-sky-200'}
          >
            Просмотреть мои заказы
          </Link>
          <Button
            type={'submit'}
            action={buttonRedirect}
            text={'Сменить пользователя'}
          />
        </div>
      </div>
    );
  return (
    <div
      className={'text-white p-4 bg-sky-200 flex items-center justify-around'}
    >
      <h1 className={'text-xl text-black px-2 py-4'}>Номер подтвержден!</h1>
      <button
        onClick={authProfile}
        className={'bg-blue-500 px-8 py-2 rounded-md'}
      >
        Войти!
      </button>
      <Link
        to={'/auth'}
        className={'px-6 py-3 rounded-md hover:underline bg-slate-900 '}
      >
        Войти в другой аккаунт
      </Link>
    </div>
  );
};
