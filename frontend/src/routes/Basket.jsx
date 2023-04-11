import {useSelector} from "react-redux";
import {MyLink} from "../components/MyLink";
import {BasketItem} from "../components/BasketItem";
import {BasketInfoPanel} from "../components/BasketInfoPanel";
export const Basket = () => {
    const basket = useSelector(state => state.basket.value)
    return (
        <div className={'bg-sky-300 flex justify-center p-6'}>
            { !basket.items[0]
                ?   <div className={'flex items-center p-8 container'}>
                        <h1 className={'m-4'}>Вы не добавили ни одного товара</h1>
                        <MyLink text={'Перейти в каталог!'} href={'/products'}/>
                    </div>
                :   <div className={'flex bg-slate-900 text-white rounded-md p-4 items-start container'}>
                        <BasketInfoPanel/>
                        <div className={'p-4'}>
                            {
                                basket.items.map((item,key) => <BasketItem key={key} {...item}/> )
                            }
                        </div>
                    </div>
                }
        </div>
    );
};