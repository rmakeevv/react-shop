import {Form, useActionData} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "../authSlice";

export const Auth = () => {
    const auth = useSelector(state => state.auth.value)
    const dispatch = useDispatch()
    const data = useActionData()

    return (
        <div className={'flex justify-center'}>
            <Form className={'grid gap-4 justify-items-center'} method={'post'}>
                <label className={'text-white'}>
                    Phone number
                    <input type={'text'} className={'m-2 text-slate-900 p-2'} name={'number'} required={true}/>
                </label>
                <button type={'submit'} className={'px-8 py-2 bg-blue-500 text-white'} onClick={() => dispatch(logIn(13123))}>GO</button>
            </Form>
            <span>{auth.userId}</span>
        </div>
    );
};