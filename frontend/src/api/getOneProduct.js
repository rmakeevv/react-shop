export const getOneProduct = async({params}) => {
    const data = await fetch(`http://51.250.65.58:5000/products/${params.id}`)
        .then(res => res.json())
        .then(data => data)
        .catch((err) => console.log(err.message))
    return data || null
}