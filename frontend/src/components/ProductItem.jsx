import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useMemo } from 'react';
export const ProductItem = ({ name, brand, price, _id, action, img }) => {
  const picture = useMemo(() => `http://localhost:5000/images/${img}`, [img]);

  return (
    <div className={'md:flex bg-slate-900 p-8 md:rounded-md items-center '}>
      <Link to={`/products/${_id}`}>
        <img src={picture} alt={name} width={'330px'} />
      </Link>
      <div className={'flex flex-col gap-4'}>
        <div className={'flex items-center'}>
          <Link to={`/products/${_id}`}>{brand + ' ' + name} </Link>
          <Link to={`/products/${_id}`} className={'p-4'}>
            Подробнее
          </Link>
        </div>
        <div className={'flex items-center gap-4'}>
          <span className={''}>Товар в наличии!</span>
          <p className={'text-lg'}>{price + ' руб.'}</p>
          <Button action={action} text={'Добавить в корзину'} />
        </div>
      </div>
    </div>
  );
};
