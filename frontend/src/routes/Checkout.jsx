import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {CheckoutItem} from "../components/CheckoutItem";
import {CheckoutInfoPanel} from "../components/CheckoutInfoPanel";

export const Checkout = () => {
    const basket = useSelector(state => state.basket.value)
    return basket.isOrdered
        ? (
            <div className={'container mx-auto text-white p-8 flex flex-col items-center'}>
                <h1>Заказ успешно создан!</h1>
                <p>Вы можете просмотреть свои заказы, на странице Личный кабинет!</p>
                <Link to={'/'} className={'px-6 py-3 bg-blue-500 rounded-md m-4'}>На главную!</Link>
            </div>
        )
        : (
            <div className={'bg-sky-300 p-8'}>
                <div className={'container mx-auto p-8 bg-slate-900 text-white'}>
                    <h1 className={'text-white text-center'}>Ваш заказ</h1>
                    {
                        basket.items.map((item,key) => <CheckoutItem key={key} {...item}/>)
                    }
                   <CheckoutInfoPanel/>
                </div>
            </div>
        )
};