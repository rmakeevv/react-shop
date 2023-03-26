import {Link} from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import {useSelector} from "react-redux";

export const Header = () => {
    const auth = useSelector(state => state.auth.value)
    return (
        <nav className={'bg-slate-900 text-white fixed w-full top-0'}>
            <div className={'max-w-4xl flex flex-row items-center justify-between mx-auto'}>
                <div className={'flex items-center h-full px-4'}>
                    <h1 className={'m-2 text-2xl'}>PLUGGED.IN</h1>
                    <Link to={'/'}>
                        <img src={logo} alt={'logo'} className={"w-10"}/>
                    </Link>
                </div>
                <ul className={'flex text-xl'}>
                    <li className={'py-6 px-8'}>
                        <Link to={'/'}>Главная</Link>
                    </li>
                    <li className={'py-6 px-8'}>
                        <Link to={'products'}>Товары</Link>
                    </li>
                </ul>
                <div>
                    {auth.isLogged
                        ? <Link to={'/profile'}>Личный кабинет</Link>
                        : <Link to={'/auth'} className={'bg-blue-500 px-8 py-3 rounded-md '}>Войти</Link>
                    }
                </div>
            </div>
        </nav>
    );
};