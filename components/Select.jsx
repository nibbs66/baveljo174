import React from 'react';

const Select = ({label, data, multiple, name, onChange}) => {
    return (
        <>
            <label  className={`  text-slate-400 font-bold`} htmlFor="">{label}</label>
            <select onChange={onChange} className={`border border-slate-400 focus:outline-0 rounded text-sm p-1 `} name={name} type="select" multiple={multiple}>
                <option value=""></option>
                {data.map((value, idx)=>(
                    <option key={idx} value={value.naam}>{value.naam}</option>
                ))}
            </select>
        </>
    );
};

export default Select;
