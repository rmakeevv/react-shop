import userIcon from '../assets/images/UI/user-circle-icon-png.png'
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../authSlice";
import {Link} from "react-router-dom";
export const Profile = () => {
    const auth = useSelector(state => state.auth.value)
    const dispatch = useDispatch()
    const buttonRedirect = () => {
        dispatch(logOut())
    }

    return auth.isLogged ? (
            <div className={'grid p-4 justify-center bg-blue-200'}>
                <div className={'grid grid-cols-2 p-8 bg-slate-900 rounded-md gap-4'}>
                    <img src={userIcon} width={'156px'} className={'rounded-md m-2'} alt={'user-ico'}/>
                    <div className={'text-white grid p-2'}>
                        <h1 className={'text-3xl'}>Your id: {auth.userId || 0}</h1>
                        Phone number: {auth.userId || 0}
                    </div>
                    <button className={'rounded-md bg-blue-500 text-white px-8 py-2'} type={'submit'} onClick={buttonRedirect}>Quit</button>
                </div>
            </div>
    ) : (
        <div className={'grid items-center justify-center text-white p-4'}>
            <Link to={'/'} className={'p-4 bg-blue-700 rounded-md px-8'}>To main</Link>
        </div>
    )
};