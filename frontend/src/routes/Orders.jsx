import {Link, useLoaderData} from "react-router-dom";
import {OrderItem} from "../components/OrderItem";
export const loader = async ({params}) => {
    const {userid} = params
    const data = await fetch(`http://localhost:5000/orders/${userid}`)
        .then(res => res.json())
        .then(data => data)
        .catch((err) => console.log(err.message))
    return data || null
}
export const Orders = () => {
    const data = useLoaderData()
    return data[0]
        ? (
            <div className={'bg-sky-300 p-8'}>
                <div className={'grid gap-4 mx-auto container bg-slate-900 text-white rounded-md p-8'}>
                    <h1 className={'text-center m-4'}>Ваши заказы</h1>
                    {
                        data.map(({items, _id}, key) => {
                            return (
                                <div className={'bg-slate-700 text-white p-4 rounded-md flex flex-col gap-4'} key={key}>
                                    <h1 className={'m-4'}> Номер заказа: {_id}</h1>
                                    <hr/>
                                    {
                                        items.map((item, key) => <OrderItem key={key} {...item}/>)
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
        : (
            <div className={'flex justify-center items-center'}>
                <h1 className={'text-center text-white'}>Вы еще не делали заказов!</h1>
                <Link to={'/products'} className={'bg-blue-500 text-white px-6 py-3 m-4 rounded-md'}>Перейти в каталог!</Link>
            </div>
        )
};