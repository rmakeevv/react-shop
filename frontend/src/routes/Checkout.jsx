import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrderApi } from '../api/createOrderApi';
import { checkOut } from '../features/basketSlice';

export const Checkout = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.value);
  const total = basket.items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  const createOrder = () => {
    createOrderApi(basket).then((data) => console.log(data));
    dispatch(checkOut());
  };

  return basket.isOrdered ? (
    <div
      className={'container mx-auto text-white p-8 flex flex-col items-center'}
    >
      <h1>Заказ успешно создан!</h1>
      <p>Вы можете просмотреть свои заказы, на странице Личный кабинет!</p>
      <Link to={'/'} className={'px-6 py-3 bg-blue-500 rounded-md m-4'}>
        На главную!
      </Link>
    </div>
  ) : (
    <div className={'bg-sky-300 p-8'}>
      <div className={'container mx-auto p-8 bg-slate-900 text-white'}>
        <h1 className={'text-white text-center'}>Ваш заказ</h1>
        {basket.items.map((item, key) => {
          const image = `http://localhost:5000/images/${item.img}`;
          return (
            <div className={'flex'} key={key}>
              <div key={key} className={'p-4 text-white flex justify-center'}>
                <img width={'140px'} src={image} alt={'product'} />
                <div className={'grid items-center justify-items-center p-4'}>
                  <Link to={`/products/${item._id}`}>
                    {item.brand + ' ' + item.name}
                  </Link>
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          );
        })}
        <div className={'flex items-center justify-center'}>
          <span> Итого {total}</span>
          <span className={'m-4'}>Товаров в заказе: {basket.items.length}</span>
          <button
            className={'px-6 py-3 bg-blue-500 rounded-md'}
            onClick={createOrder}
          >
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
};
