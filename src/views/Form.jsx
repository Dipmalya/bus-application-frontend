import React from 'react';

const Form = ({ inputs = [], onBlur, errors = [] }) => (
    <form>
        {
            inputs.map((input, index) => {
                const {
                    label = '',
                    type = '',
                    id = '',
                    className = '',
                    placeholder = '',
                    errorText = '',
                    value
                } = input;

                return (
                    <div className="form-group" key={id}>
                        <label htmlFor={id}>{label}</label>
                        <input
                            type={type}
                            id={id}
                            value={value}
                            className={className}
                            placeholder={placeholder}
                            onBlur={onBlur}
                            required
                        />
                        {
                            errors[index] &&
                            errors[index].id === id &&
                            errors[index].status &&
                            <div className="text-error">{errorText}</div>
                        }
                    </div>
                )
            })
        }
    </form>
)

export default Form;