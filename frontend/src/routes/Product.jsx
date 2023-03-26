import image from '../assets/images/products/phones/iphone.png'
import { useLoaderData, useNavigate} from "react-router-dom";
export const Product = () => {
    const navigate = useNavigate()
    const {name, price} = useLoaderData()
    return (
        <div className={'bg-gradient-to-r from-cyan-400 to-blue-700 text-slate-200 flex p-8 items-stretch'}>
            <img src={image} alt={'product'} className={'w-1/3'}/>
            <div className='flex flex-col items-start bg-slate-900 p-8 rounded-md justify-around'>
                <div className={'flex items-center'}>
                    <h1 className={'text-3xl'}>{name}</h1>
                    <button className={'ml-10 px-6 py-2 rounded-md bg-blue-700'} onClick={() => navigate(-1)}>Назад</button>
                </div>
                <p className={'py-2'}>iPhone 13. Самая совершенная система двух камер на iPhone.
                    Режим «Киноэффект» делает из видео настоящее кино.
                    Супербыстрый чип A15 Bionic. Неутомимый аккумулятор.
                    Прочный корпус. И еще более яркий дисплей Super Retina XDR.</p>
                <div className={'grid grid-cols-2 gap-4 items-center bg-slate-900 py-2 rounded-md'}>
                    <button className='bg-blue-600 px-8 py-3 rounded-md'>Купить</button>
                    <span className={'text-xl'}>{price + ' руб.'}</span>
                </div>
            </div>
        </div>
    );
};