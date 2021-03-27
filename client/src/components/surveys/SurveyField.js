import React from 'react';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ input, label , meta: {error, touched}}) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '10px'}}/>
            <div className="red-text" style={{marginBottom: '20px', fontSize: '12px'}}>{touched && error}</div>
        </div>
    )
}