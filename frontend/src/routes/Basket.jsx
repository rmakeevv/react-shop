import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/Button';
import { removeItem } from '../features/basketSlice';
import { MyLink } from '../components/MyLink';
import { Link } from 'react-router-dom';
export const Basket = () => {
  const basket = useSelector((state) => state.basket.value);
  const auth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const total = basket.items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  return (
    <div className={'bg-sky-300 flex justify-center p-6'}>
      {!basket.items[0] ? (
        <div className={'flex items-center p-8 container'}>
          <h1 className={'m-4'}>Вы не добавили ни одного товара</h1>
          <MyLink text={'Перейти в каталог!'} href={'/products'} />
        </div>
      ) : (
        <div
          className={
            'flex bg-slate-900 text-white rounded-md p-4 items-start container'
          }
        >
          <div
            className={
              'p-4 grid gap-4  bg-slate-700 rounded-md  justify-items-start'
            }
          >
            Сумма заказа: {total}
            <br />
            Выбрано товаров: {basket.items.length}
            {auth.isLogged ? (
              <Link
                to={'/checkout'}
                className={'bg-sky-200 text-black px-4 py-2 rounded-md text-sm'}
              >
                Перейти к оформлению
              </Link>
            ) : (
              <Link to={'/auth'}>Войти в профиль</Link>
            )}
          </div>
          <div>
            {basket.items.map((item, key) => {
              const image = `http://localhost:5000/images/${item.img}`;
              return (
                <div key={key} className={'p-2 text-white flex justify-center'}>
                  <img width={'180px'} src={image} alt={'product'} />
                  <div
                    className={'flex flex-col items-start justify-center gap-3'}
                  >
                    <Link to={`/products/${item._id}`}>
                      {item.brand + ' ' + item.name}
                    </Link>
                    <span>{item.price}</span>
                    <Button
                      text={'Удалить'}
                      action={() => dispatch(removeItem(item.basketItemId))}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
