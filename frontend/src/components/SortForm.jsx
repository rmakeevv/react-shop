import { Form, useSubmit } from 'react-router-dom';

export const SortForm = () => {
  const submit = useSubmit();
  return (
    <Form
      method={'get'}
      className={'text-white align-center flex items-center'}
    >
      <div>
        <span className={'mr-2'}>Категории</span>
        <select
          name={'first'}
          className={'text-sky-200 bg-inherit focus:border-0'}
          onChange={(event) => submit(event.currentTarget.form)}
        >
          <option
            defaultChecked={true}
            value={'all'}
            className={'text-slate-900'}
          >
            Все товары
          </option>
          <option value={'desktops'} className={'text-slate-900'}>
            Компьютеры
          </option>
          <option value={'phones'} className={'text-slate-900'}>
            Телефоны
          </option>
          <option value={'laptops'} className={'text-slate-900'}>
            Ноутбуки
          </option>
        </select>
      </div>
      <div>
        <span className={'m-2'}>По цене</span>
        <select
          name={'order'}
          className={'text-slate-900 rounded-sm px-2'}
          onChange={(event) => submit(event.currentTarget.form)}
        >
          <option value={'desc'}>Сначала дороже</option>
          <option value={'asc'}>Сначала дешевле</option>
        </select>
      </div>
    </Form>
  );
};
