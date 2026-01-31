import React from 'react';

const Button = ({
    text,
    icon: Icon,
    variant = 'black',
    className = '',
    href,
    target,
    ...props
}) => {
    const baseStyles = "px-6 py-2.5 rounded-full flex gap-2 items-center justify-center font-medium transition-all duration-300 active:scale-95";

    const variants = {
        black: "bg-black text-white hover:bg-gray-800",
        orange: "bg-orange text-white hover:bg-orange/90",
        white: "bg-white text-black border border-gray-200 hover:bg-gray-50",
    };

    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            target={target}
            className={`${baseStyles} ${variants[variant] || variants.black} ${className}`}
            {...props}
        >
            {Icon && <Icon size={18} />}
            <span>{text}</span>
        </Component>
    );
};

export default Button;
