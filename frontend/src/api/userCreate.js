export const userCreate = async ({request}) => {
    const formData = await request.formData();
    const {number} = Object.fromEntries(formData);
    const userData = {phone : number}
    const data = await fetch(`http://localhost:5000/products/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => data)
        .catch((err) => console.log(err.message))
        return data || 'message'
}