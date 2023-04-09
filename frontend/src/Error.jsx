import {Link, useRouteError} from "react-router-dom";

export const Error = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <div className={'grid justify-center p-4 bg-sky-200 gap-4'}>
            <h1>something wrong!</h1>
            <p>{error.statusText || error.message}</p>
            <Link to={'/'} className={'bg-slate-900 text-white px-8 py-4'}>Go to main</Link>
        </div>
    );
};