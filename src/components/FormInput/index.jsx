import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

const FormInput = ({handleChange, label, ...otherProps}) => ( 
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {
            label ? 
            (<label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`}>
                {otherProps.name}
            </label>)
            : null
        }
    </div>
);
 
export default FormInput;