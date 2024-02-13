import { useLoaderData } from 'react-router-dom';
import { ProductItem } from '../components/ProductItem';
import { SortForm } from '../components/SortForm';
import { useDispatch } from 'react-redux';
import { addItem } from '../basketSlice';
export const Products = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  return (
    <div className={'bg-gradient-to-r from-cyan-400 to-blue-700 md:p-6'}>
      <div className={'flex flex-col container mx-auto md:px-8'}>
        <div className={'p-8 bg-slate-900 md:rounded-md md:flex items-center'}>
          <h1 className={'md:text-xl text-white'}>
            {data ? 'В наличии ' + data.length + ' товар(ов)' : 'error'}
          </h1>
          <SortForm />
        </div>
        <div className={'grid md:gap-2 text-white py-8'}>
          {data[0] ? (
            data.map((item, key) => (
              <ProductItem
                key={key}
                {...item}
                action={() => dispatch(addItem(item))}
              />
            ))
          ) : (
            <div className={'bg-slate-900 text-white p-4'}>
              <h1>Товары не найдены! Попробуйте позже.</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
