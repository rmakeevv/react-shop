import { Outlet, useNavigation } from 'react-router-dom';
import { Header } from '../components/Header';
import { useSelector } from 'react-redux';
export const Root = () => {
  const auth = useSelector((state) => state.auth.value);
  const basket = useSelector((state) => state.basket.value);
  const navigation = useNavigation();
  return (
    <div className={'font-sans h-screen'}>
      <Header auth={auth} basket={basket} />
      <div
        className={`mt-10  pt-5 h-full bg-slate-900 ${navigation.state === 'loading' ? 'opacity-50' : ''}`}
      >
        <Outlet />
      </div>
    </div>
  );
};
