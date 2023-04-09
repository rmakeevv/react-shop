import pc from '../assets/images/products/laptops/img.png'
import {Link} from "react-router-dom";
export const Main = () => {
    return (
        <div className={'bg-gradient-to-r from-cyan-400 to-blue-700 text-white p-8'}>
            <div className={'flex bg-slate-900 py-8 px-8 rounded-md items-center container mx-auto justify-around'}>
                <img src={pc} alt={'pc'} width={'320px'} className={'p-2'}/>
                <h1 className={'md:text-xl text-slate-200 text-center '}>Добро пожаловать в наш магазин!</h1>
                <Link to={'products'} className={'bg-blue-700 px-8 py-4 rounded-md md:text-xl hover:underline'}>Перейти в каталог</Link>
            </div>
        </div>
    );
};