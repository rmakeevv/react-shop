import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const BasketInfoPanel = () => {
    const basket = useSelector(state => state.basket.value)
    const total = basket.items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    const auth = useSelector(state => state.auth.value)
    return (
        <div className={'p-4 grid gap-4 items-center bg-slate-700 rounded-md'}>
            Сумма заказа: {total}
            <br/>
            Выбрано товаров: {basket.items.length}
            { auth.isLogged
                ? <Link to={'/checkout'} className={'bg-sky-200 text-black px-6 py-3 rounded-md'}>Перейти к оформлению</Link>
                : <Link to={'/auth'}>Войти в профиль</Link>
            }
        </div>
    );
};