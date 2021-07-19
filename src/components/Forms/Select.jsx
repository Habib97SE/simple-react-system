import React from 'react';

export default function Select(props)
{
    return (
        <>
            <div className="form-control">
            <label>{ props.label }</label>
            <select name={props.name}>
                {
                    props.options.map( (value, index) => (
                        <option key={index} value={value}> {value}</option>
                    ))
                }
            </select>
            </div>
        </>
    );
}