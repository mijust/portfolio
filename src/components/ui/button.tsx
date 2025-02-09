import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    size?: 'icon' | 'small' | 'medium' | 'large';
    variant?: 'ghost' | 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', disabled = false, size = 'medium', variant = 'primary' }) => {
    const buttonClass = classNames({
        'btn': true,
        'btn-icon': size === 'icon',
        'btn-small': size === 'small',
        'btn-medium': size === 'medium',
        'btn-large': size === 'large',
        'btn-ghost': variant === 'ghost',
        'btn-primary': variant === 'primary',
        'btn-secondary': variant === 'secondary',
    });

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={buttonClass}>
            {children}
        </button>
    );
};

export default Button;
