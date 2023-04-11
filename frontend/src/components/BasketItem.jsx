import {Link} from "react-router-dom";
import {Button} from "./Button";
import {removeItem} from "../basketSlice";
import {useDispatch} from "react-redux";

export const BasketItem = ({ _id, name, brand, price, basketItemId, img}) => {
    const image = `http://localhost:5000/images/${img}`
    const dispatch = useDispatch()
    return (
        <div className={'p-4 text-white flex justify-center'}>
            <img width={'340px'} src={image} alt={'product'}/>
            <div className={'flex flex-col items-start justify-center'}>
                <div className={'flex flex-col'}>
                    <Link to={`/products/${_id}`}>
                        {brand + " " + name}
                    </Link>
                    <span>{price}</span>
                </div>
                <Button text={'Удалить'} action={() => dispatch(removeItem(basketItemId))}/>
            </div>
        </div>
    );
};