import { Outlet, useNavigation } from 'react-router-dom';
import { Header } from '../components/Header';
export const Root = () => {
  const navigation = useNavigation();
  return (
    <div className={'font-sans h-screen'}>
      <Header />
      <div
        className={`mt-20 md:mt-16 pt-5 h-full bg-slate-900 ${navigation.state === 'loading' ? 'opacity-50' : ''}`}
      >
        <Outlet />
      </div>
    </div>
  );
};
