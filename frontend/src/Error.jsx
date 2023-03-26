import {useRouteError} from "react-router-dom";

export const Error = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <div className={'grid justify-center p-4 bg-sky-200'}>
            <h1>something wrong!</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};