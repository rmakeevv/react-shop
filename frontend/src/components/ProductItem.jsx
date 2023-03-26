import desktop from '../assets/images/products/desktops/asus/img.png'
import phone from '../assets/images/products/phones/iphone.png'
import laptop from  '../assets/images/products/laptops/img.png'
import {Link} from "react-router-dom";
export const ProductItem = ({name, brand, price, category, _id}) => {
    const image = (category === 'phones')
        ? phone
        : (category === 'desktops')
        ? desktop
        : laptop
    return (
        <li className={'flex bg-slate-900 p-4 rounded-md justify-between'}>
            <Link to={`/products/${_id}`}>
                <img src={image} alt={name} className={'w-64'}/>
            </Link>
            <div className={''}>
                <Link to={`/products/${_id}`}>{brand + " " + name}</Link>
            </div>
            <div>
                <p className={'text-lg'}>{price + " руб."}</p>
                <button className={'px-4 py-1.5 bg-blue-500 text-white rounded-md'}>Купить</button>
            </div>
        </li>
    );
};