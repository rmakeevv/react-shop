import {useActionData} from "react-router-dom";
import {useSelector} from "react-redux";
import {MyLink} from "../components/MyLink";
import {AuthForm} from "../components/AuthForm";

export const Auth = () => {
    const auth = useSelector(state => state.auth.value)
    const errors = useActionData()
    return auth.isLogged ?
        (
            <div className={'grid text-white justify-items-center gap-4'}>
                <h1 className={'md:text-3xl p-4'}>Awesome!</h1>
                <span className={'text-2xl'}>You're logged in!</span>
                <MyLink href={'/products'} text={'go to store'}/>
            </div>
        )
    : (
        <div className={'grid gap-4 justify-items-center items-center bg-sky-200 py-4'}>
            <h1 className={'md:text-xl p-4'}>
                Введите номер телефона чтобы войти в профиль
            </h1>
            <AuthForm/>
            <span>{errors}</span>
        </div>
    );
};