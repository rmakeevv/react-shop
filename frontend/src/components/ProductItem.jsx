import {Link} from "react-router-dom";
import {Button} from "./Button";
export const ProductItem = ({name, brand, price, _id, action, img}) => {
    const picture = `http://localhost:5000/images/${img}`
    return (
        <div className={'md:flex bg-slate-900 p-8 md:rounded-md items-center'}>
            <Link to={`/products/${_id}`}>
                <img src={picture} alt={name} width={'330px'}/>
            </Link>
            <div className={'flex flex-col items-center'}>
                <div className={'m-4 flex items-center'}>
                    <Link to={`/products/${_id}`}>{brand + " " + name} </Link>
                    <Link to={`/products/${_id}`} className={'p-4'}>Подробнее</Link>

                </div>
                <div className={'flex items-center gap-4'}>
                    <span className={'p-4'}>Товар в наличии!</span>
                    <p className={'text-lg'}>{price + " руб."}</p>
                    <Button action={action} text={'Добавить в корзину'}/>
                </div>
            </div>
        </div>
    );
};