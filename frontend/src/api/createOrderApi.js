import {redirect} from "react-router-dom";
export const createOrderApi = async basketData => {
    const data = await fetch(`http://localhost:5000/orders/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(basketData)
    })
        .then(res => res.json())
        .then(data => data)
        .catch((err) => console.log(err.message))
    console.log(data)
    return redirect(`/profile`)
}