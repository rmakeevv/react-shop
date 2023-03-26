import { useLoaderData} from "react-router-dom";
import {ProductItem} from "../components/ProductItem";
import {SortForm} from "../components/SortForm";
export const Products = () => {
    const data = useLoaderData()
    return  (
        <div className={'bg-gradient-to-r from-cyan-400 to-blue-700 flex flex-col p-6 items-center'}>
            <div className={'p-6 bg-slate-900 rounded-md flex flex-row max-w-4xl'}>
                <h1 className={'text-xl text-white basis-1/3'}>{data ? "В наличии "  + data.length + " товар(ов)" : "error"}</h1>
                <SortForm/>
            </div>
            <div className={'grid gap-2 text-white py-8 max-w-4xl'}>
                {data ? data.map((item, key) => <ProductItem key={key} {...item}/>) : <div>No data</div> }
            </div>
        </div>
    )
}