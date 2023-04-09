import {redirect} from "react-router-dom";
export const userCreate = async ({request}) => {
    const formData = await request.formData();
    const {number} = Object.fromEntries(formData);
    if (isNaN(Number(number))) {
        console.log('nan')
        return 'Неправильно набран номер!'
    }
    const userData = {phone : number}
    const data = await fetch(`http://localhost:5000/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => data)
        .catch((err) => console.log(err.message))
    console.log(data)
    return data
        ? redirect(`/profile/${data.insertedId || data._id}`)
        : redirect('/auth')
}