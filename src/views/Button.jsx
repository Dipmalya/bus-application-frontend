import React from 'react';

const Button = ({ buttons = [], onClick, disabled = false }) => (
    <>
        {
            buttons.map((button) => {
                const {
                    type = '',
                    className = '',
                    id = '',
                    value = ''
                } = button;
                return (
                    <button
                        type={type}
                        className={className}
                        id={id}
                        key={id}
                        onClick={onClick}
                        disabled={disabled}
                    >
                        {value}
                    </button>
                )
            })
        }
    </>
)

export default Button;