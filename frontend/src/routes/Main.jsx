import phone from '../assets/images/products/phones/img_3.png'
import {Link} from "react-router-dom";
export const Main = () => {
    return (
        <div className={'text-white'} style={{background: '#F5F5F5'}}>
            <div className={'flex rounded-md container mx-auto items-center'}>
                <img src={phone} alt={'pc'} width={'600px'}/>
                <div className={'flex flex-col items-center'}>
                    <h1 className={'md:text-3xl text-slate-900 text-center p-4'}>Добро пожаловать в наш магазин!</h1>
                    <Link to={'products'} className={'bg-gray-900 px-12 py-4 rounded-md md:text-xl hover:underline'}>Перейти в каталог</Link>
                </div>
            </div>
        </div>
    );
};