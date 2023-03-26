import pc from '../assets/images/products/desktops/asus/img.png'
import {Link} from "react-router-dom";
export const Main = () => {
    return (
        <div className={'bg-gradient-to-r from-cyan-400 to-blue-700 text-white p-8'}>
            <div className={'grid grid-cols-3 justify-items-start bg-slate-900 py-8 px-12 rounded-md gap-4 items-center'}>
                <img src={pc} alt={'pc'} width={'420px'} className={'hover:opacity-50 p-4'}/>
                <h2 className={'text-3xl text-slate-200'}>Наш магазин невероятных товаров!</h2>
                <Link to={'products'} className={'bg-blue-700 px-8 py-4 rounded-md text-lg hover:underline'}>Перейти в каталог</Link>
            </div>
        </div>
    );
};