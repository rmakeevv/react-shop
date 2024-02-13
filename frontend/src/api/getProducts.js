export const getProducts = async ({ request }) => {
  let url = new URL(request.url);
  let category = url.searchParams.get('first');
  let order = url.searchParams.get('order');
  const urlApi = category
    ? `http://localhost:5000/categories/${category}/${order}`
    : `http://localhost:5000/products/`;
  const data = await fetch(urlApi)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err.message));
  return data || null;
};
