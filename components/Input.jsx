import React from 'react';

const Input = ({label, type, placeholder, name, onChange}) => {
    return (
        <>
            <label className={`  text-slate-400 font-bold`} htmlFor="date">{label}</label>
            <input
                onChange={onChange}
                className={`border border-slate-400 focus:outline-0 rounded text-sm p-1 `} name={name} type={type} placeholder={placeholder}
            />
        </>
    );
};

export default Input;
