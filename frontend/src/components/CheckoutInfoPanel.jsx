import {useDispatch, useSelector} from "react-redux";
import {createOrderApi} from "../api/createOrderApi";
import {checkOut} from "../basketSlice";

export const CheckoutInfoPanel = () => {
    const basket = useSelector(state => state.basket.value)
    const dispatch = useDispatch()
    const total = basket.items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    const createOrder = () => {
        createOrderApi(basket)
            .then( data => console.log(data))
        dispatch(checkOut())
    }

    return (
        <div className={'flex items-center justify-center'}>
            <span> Итого {total}</span>
            <span className={'m-4'}>
                        Товаров в заказе: {basket.items.length}
                    </span>
            <button className={'px-6 py-3 bg-blue-500 rounded-md'} onClick={createOrder}>Заказать</button>
        </div>
    );
};