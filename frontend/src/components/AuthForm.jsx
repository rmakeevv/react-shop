import {Form} from "react-router-dom";
import {TextInput} from "./TextInput";
import {Button} from "./Button";

export const AuthForm = () => {
    return (
        <Form className={'p-4 rounded-md bg-slate-900'} method={"post"}>
            <TextInput label={'Номер телефона'} name={'number'}/>
            <Button type={'submit'} text={'Войти'}/>
        </Form>
    );
};