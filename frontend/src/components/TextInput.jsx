export const TextInput = ({label, name}) => {
    return (
        <label className={'text-white mx-3'}>
            {label}
            <input type={'text'} className={'m-4 text-slate-900 p-3 rounded-md'} name={name} required={true}/>
        </label>
    );
};