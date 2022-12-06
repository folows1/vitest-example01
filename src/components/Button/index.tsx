import React from "react";

type Props = {
    children: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: Props) {
    return (
        <button data-testid="button" {...rest}
            style={{
                backgroundColor: "#000",
                height: "40px",
            }}>
            {children}
        </button>
    )
}