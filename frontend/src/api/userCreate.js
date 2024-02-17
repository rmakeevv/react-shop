import { redirect } from 'react-router-dom';
import {instance} from './index';
export const userCreate = async ({ request }) => {
  const formData = await request.formData();
  const { number } = Object.fromEntries(formData);
  if (isNaN(Number(number))) {
    console.log('nan');
    return 'Неправильно набран номер!';
  }
  const userData = { phone: number };
  const data = await instance.post(`/users`,userData)
    .then((res) => res.data)
    .catch((err) => console.log(err.message));
  return data
    ? redirect(`/profile/${data.insertedId || data._id}`)
    : redirect('/auth');
};
