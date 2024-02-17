import {instance} from './index';

export const getProducts = async ({ request }) => {
  let url = new URL(request.url);
  let category = url.searchParams.get('first');
  let order = url.searchParams.get('order');
  const urlApi = category
    ? `/categories/${category}/${order}`
    : `/products/`;
  const data = await instance.get(urlApi)
    .then((res) => res.data)
    .catch((err) => console.log(err.message));
  return data || null;
};
