import { Form, useActionData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MyLink } from '../components/MyLink';

export const Auth = () => {
  const auth = useSelector((state) => state.auth.value);
  const errors = useActionData();
  if (auth.isLogged) return (
    <div className={'grid text-white justify-items-center gap-4'}>
      <h1 className={'md:text-3xl p-4'}>Awesome!</h1>
      <span className={'text-2xl'}>You're logged in!</span>
      <MyLink href={'/products'} text={'go to store'} />
    </div>
  ) 

  return (
    <div
      className={'grid gap-4 justify-items-center items-center bg-sky-200 py-4'}
    >
      <h1 className={'md:text-xl p-4'}>
        Введите номер телефона чтобы войти в профиль
      </h1>
      <Form className={'p-4 rounded-md bg-slate-900'} method={'post'}>
        <label className={'text-white mx-3'}>
          Phone number
          <input
            type={'text'}
            className={'m-4 text-slate-900 p-3 rounded-md'}
            name={'number'}
            required={true}
          />
        </label>
        <button
          type={'submit'}
          className={'bg-blue-500 text-white px-6 py-3 rounded-md'}
        >
          Войти
        </button>
      </Form>
      <span>{errors}</span>
    </div>
  );
};
