import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/basketSlice';
export const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useLoaderData();
  const picture = `http://localhost:5000/images/${'asus-pc.png' && data.img}`;
  return data ? (
    <div
      className={
        'bg-gradient-to-r from-cyan-400 to-blue-700 text-slate-200 flex p-4 items-stretch justify-center'
      }
    >
      <div className="md:flex items-start bg-slate-900 p-2 rounded-md justify-around container">
        <img src={picture} alt={'product'} width={'400px'} />
        <div
          className={
            'grid items-center bg-slate-900 px-6 rounded-md justify-items-start'
          }
        >
          <div className={'flex items-center py-3'}>
            <h1 className={'text-lg'}>{data.name}</h1>
            <button
              className={'ml-10 px-6 py-2 rounded-md bg-blue-700'}
              onClick={() => navigate(-1)}
            >
              Назад
            </button>
          </div>
          <p className={'py-2'}>Хранилище: {data.storage || 'Не указано'}</p>
          <p className={'py-2'}>Цвет: {data.color || 'Не указано'}</p>
          <p className={'py-2'}>Дисплей: {data.display || 'Не указано'}</p>
          <p className={'py-2'}>Камера: {data.camera || 'Не указано'}</p>
          <p className={'py-2'}>
            Разрешение экрана: {data.resolution || 'Не указано'}
          </p>
          <p className={'py-2'}>Производитель: {data.brand || 'Не указано'}</p>
          <p className={'py-2'}>Категория: {data.category || 'Не указано'}</p>
          <div className={'flex items-center'}>
            <span className={'pr-4'}> {data.price + ' руб.'} </span>
            <button
              className="bg-blue-700 px-6 py-2 rounded-md m-2"
              onClick={() => dispatch(addItem(data))}
            >
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={'flex justify-center gap-2 items-center flex-col'}>
      <h1 className={'text-center text-3xl text-white'}>
        К сожалению товара больше нет в продаже!
      </h1>
      <Link to={'/products'} className={'px-6 py-3 bg-sky-200 rounded-md'}>
        На главную!
      </Link>
    </div>
  );
};
