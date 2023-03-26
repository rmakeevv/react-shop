export const getOneProduct = async({params}) => {
    const data = await fetch(`http://localhost:5000/products/${params.id}`)
        .then(res => res.json())
        .then(data => data)
        .catch((err) => console.log(err.message))
    return data || null
}